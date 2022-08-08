import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OthersMainPage from '../pages/Others/OthersMainPage'
import OthersDiaryPage from '../pages/Others/OthersDiaryPage'

const Stack = createNativeStackNavigator()
export default function OthersDiaryStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="OthersMainPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OthersMainPage" component={OthersMainPage} />
        <Stack.Screen name="OthersDiaryPage" component={OthersDiaryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
