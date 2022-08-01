import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OthersMainPage from '../Others/OthersMainPage'
import OthersDiaryPage from '../Others/OthersDiaryPage'

const Stack = createNativeStackNavigator()
export default function Dream() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OthersMainPage" component={OthersMainPage} />
        <Stack.Screen name="OthersDiaryPage" component={OthersDiaryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
