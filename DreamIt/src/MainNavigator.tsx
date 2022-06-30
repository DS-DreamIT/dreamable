/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home'
import Dream from './Dream'
import MyPage from './Mypage'

import {ParamListBase, RouteProp} from '@react-navigation/native'
import {Image, Text} from 'react-native'

const Tab = createBottomTabNavigator()

// prettier-ignore
export default function MainNavigator() {
  type TabBarProps = { focused: boolean, color: string, size: number }


  const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
    const { name } = route
    return {
      headerShown: false, // 헤더 삭제
      tabBarLabel: ({ focused, color, size }: TabBarProps) => {
        switch (name) {
          case 'home':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>메인</Text>
          case 'travel':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>꿈 여행하기</Text>
          case 'my':
            return <Text style={{ color: focused ? 'purple' : color, fontSize: 10, marginBottom: 3 }}>마이페이지</Text>
        }
      },
      tabBarIcon: ({ focused, color, size }: TabBarProps) => {
        switch (name) {
          case 'home':
            return <Image
              source={focused ? require("./assets/images/home-selected.png") : require("./assets/images/home-default.png")} />
          case 'travel':
            return <Image
              source={focused ? require("./assets/images/dream-selected.png") : require("./assets/images/dream-default.png")} />
          case 'my':
            return <Image
              source={focused ? require("./assets/images/my-selected.png") : require("./assets/images/my-default.png")} />
        }
      }
    }
  }
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="travel" component={Dream} />
      <Tab.Screen name="my" component={MyPage} />
    </Tab.Navigator>

  )
}
