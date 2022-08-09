import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../pages/Home/HomePage'
import AdvicePage from '../pages/Dream/AdvicePage'
import ResultPage from '../pages/Dream/ResultPage'
import ShareDream from '../pages/Dream/ShareDream'
import TravelPage from '../pages/Dream/TravelPage'
import WritingPage from '../pages/Dream/WritingPage'
import SelectPage from '../pages/Dream/SelectPage'

const Stack = createNativeStackNavigator()
export default function HomeStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="SelectPage" component={SelectPage} />
        <Stack.Screen name="AdvicePage" component={AdvicePage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
        <Stack.Screen name="ShareDream" component={ShareDream} />
        <Stack.Screen name="TravelPage" component={TravelPage} />
        <Stack.Screen name="WritingPage" component={WritingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
