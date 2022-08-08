import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import CalendarPage from '../pages/My/CalendarPage'
import MyProfilePage from '../pages/My/MyProfilePage'

const Stack = createNativeStackNavigator()
export default function HomeStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="ProfilePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProfilePage" component={MyProfilePage} />
        <Stack.Screen name="CalendarPage" component={CalendarPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
