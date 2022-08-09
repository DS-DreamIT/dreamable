import React, {useEffect, useMemo, useReducer} from 'react'
import {Alert, View} from 'react-native'
import {ActivityIndicator} from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from './src/components/Common/MainNavigator'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/pages/Home/HomePage'
import BrowsePage from './src/pages/Home/BrowsePage'
import MyPage from './src/pages/My/Mypage'
import SelectPage from './src/pages/Dream/SelectPage'
import AdvicePage from './src/pages/Dream/AdvicePage'
import ShareDream from './src/pages/Dream/ShareDream'
import TravelPage from './src/pages/Dream/TravelPage'
import WritingPage from './src/pages/Dream/WritingPage'
import Gallery from './gallery'
import MyProfilePage from './src/pages/My/MyProfilePage'
import LoginPage from './src/pages/Login/LoginPage'
import RegisterPage from './src/pages/Login/RegisterPage'
import ResultPage from './src/pages/Dream/ResultPage'
import CalendarPage from './src/pages/My/CalendarPage'

import {AuthContext} from './src/components/Login/context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Config from 'react-native-config'

const Stack = createNativeStackNavigator()
export default function App() {
  const initialLoginState = {
    isLoading: true,
    email: '',
    userToken: null,
  }

  const loginReducer = (
    prevState: any,
    action: {type: any; token: any; id: any},
  ) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          email: '',
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(
    () => ({
      signIn: async (email: string | null, password: string | null) => {
        let userToken: string | null
        fetch(`${Config.API_URL}/api/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userEmail: email,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(async response => {
            if (response && response.success) {
              userToken = response.token
              try {
                await AsyncStorage.setItem('userToken', userToken, () => {
                  dispatch({type: 'LOGIN', id: email, token: userToken})
                })
              } catch (e) {
                console.log(e)
              }
            } else {
              if (response.warning) {
                Alert.alert('Warning', response.warning)
              } else {
                Alert.alert('Warning', '이메일을 올바르게 입력하세요.')
              }
            }
          })
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken')
        } catch (e) {
          console.log(e)
        }
        dispatch({type: 'LOGOUT'})
      },
      signUp: async (nickname: any, email: any, password: any) => {
        let userToken: string | null
        userToken = null
        fetch(`${Config.API_URL}/api/user/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userEmail: email,
            nickname: nickname,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(async response => {
            if (response && response.success) {
              userToken = response.token
              try {
                await AsyncStorage.setItem('userToken', userToken, () => {
                  dispatch({type: 'REGISTER', id: email, token: userToken})
                  Alert.alert('Success', '회원가입 성공!')
                })
              } catch (e) {
                console.log(e)
                Alert.alert('Failed', '회원가입 실패')
              }
            }
          })
      },
    }),
    [],
  )

  useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 100)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken?.length > 0 ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainNavigator" component={MainNavigator} />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="BrowsePage"
              component={BrowsePage}
              options={{title: 'Browse'}}
            />
            <Stack.Screen
              name="Mypage"
              component={MyPage}
              options={{title: 'Mypage'}}
            />
            <Stack.Screen
              name="SelectPage"
              component={SelectPage}
              options={{title: 'SelectPage'}}
            />
            <Stack.Screen name="AdvicePage" component={AdvicePage} />
            <Stack.Screen name="ShareDream" component={ShareDream} />
            <Stack.Screen name="TravelPage" component={TravelPage} />
            <Stack.Screen name="WritingPage" component={WritingPage} />
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="MyProfilePage" component={MyProfilePage} />
            <Stack.Screen name="ResultPage" component={ResultPage} />
            <Stack.Screen name="CalendarPage" component={CalendarPage} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
