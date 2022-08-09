import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import SelectCard from '../../components/Card/SelectCard'
import TopBar from '../../components/Common/TopBar'

const background = require('../../assets/images/background.png')

// @ts-ignore
export default function SelectPage({navigation, route}) {
  const keyword = route.params.keyword
  const emotion = route.params.emotion
  const move = ['TravelPage', 'AdvicePage', 'ShareDream']

  return (
    <ImageBackground source={background} style={styles.bgImage}>
      <TopBar navigation={navigation} type={'HOME'} />
      <View style={[styles.textView, styles.container]}>
        <Text style={styles.headText}>3일 후에 꿈을 선물해드릴게요 !</Text>
        <Text style={styles.subText}>혹시 더 필요한 게 있으신가요?</Text>
      </View>
      <View style={[styles.boxView, styles.container]}>
        <SelectCard
          keyword={keyword}
          emotion={emotion}
          text={'내 꿈과 비슷한 \n다른 이들의 꿈을 볼래요'}
          move={move[0]}
          navigation={navigation}
        />
        <SelectCard
          keyword={keyword}
          emotion={emotion}
          text={'꿈 분석 결과를 \n미리 보고 싶어요'}
          move={move[1]}
          navigation={navigation}
        />
        <SelectCard
          keyword={keyword}
          emotion={emotion}
          text={'꿈을 나누고 싶어요'}
          move={move[2]}
          navigation={navigation}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textView: {
    flex: 0.2,
  },
  boxView: {
    flex: 1,
  },
  padding: {
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  headText: {
    fontSize: 20,
    color: '#ffffff',
    paddingBottom: 12,
  },
  subText: {
    fontSize: 16,
    color: '#ffffff',
  },
})