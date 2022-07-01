import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

// import DreamTravel from './src/DreamTravel'  // 홍수연: 꿈 여행하기
// import AdviceForYou from './src/AdviceForYou'  // 홍수연: 꿈 조언
import MainNavigator from './src/MainNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home'
import Dream from './src/Dream'
import MyPage from './src/Mypage'
import SelectPage from './src/SelectPage'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="Dream" component={Dream} options={{title: 'Dream'}} />
        <Stack.Screen name="Mypage" component={MyPage} options={{title: 'Mypage'}} />
        <Stack.Screen name="SelectPage" component={SelectPage} options={{title: 'SelectPage'}} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
