import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import CalendarPage from '../pages/My/CalendarPage'
import MyProfilePage from '../pages/My/MyProfilePage'
import ResultPage from '../pages/Dream/ResultPage'
import BadgePage from '../pages/My/BadgePage'

const Stack = createNativeStackNavigator()
export default function HomeStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="ProfilePage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProfilePage" component={MyProfilePage} />
        <Stack.Screen name="CalendarPage" component={CalendarPage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
        <Stack.Screen name="BadgePage" component={BadgePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
