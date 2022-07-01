import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

// import DreamTravel from './src/DreamTravel'  // 홍수연: 꿈 여행하기
// import AdviceForYou from './src/AdviceForYou'  // 홍수연: 꿈 조언
import MainNavigator from './src/MainNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}
