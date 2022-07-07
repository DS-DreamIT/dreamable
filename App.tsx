import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigator from './src/components/Common/MainNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/Home/HomePage'
import BrowsePage from './src/pages/Home/BrowsePage'
import MyPage from './src/pages/My/Mypage'
import SelectPage from './src/pages/Dream/SelectPage'
import AdvicePage from './src/pages/Dream/AdvicePage'
import ShareDream from './src/pages/Dream/ShareDream'
import TravelPage from './src/pages/Dream/TravelPage'
import WritingPage from './src/pages/Dream/WritingPage'
import Result from './src/Result'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="BrowsePage" component={BrowsePage} options={{title: 'Browse'}} />
        <Stack.Screen name="Mypage" component={MyPage} options={{title: 'Mypage'}} />
        <Stack.Screen name="SelectPage" component={SelectPage} options={{title: 'SelectPage'}} />
        <Stack.Screen name="AdvicePage" component={AdvicePage} />
        <Stack.Screen name="ShareDream" component={ShareDream} />
        <Stack.Screen name="TravelPage" component={TravelPage} />
        <Stack.Screen name="WritingPage" component={WritingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
