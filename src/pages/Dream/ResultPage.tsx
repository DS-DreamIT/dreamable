import {format} from 'date-fns'
import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import TopBar from '../../components/Common/TopBar'
import MoodCard from '../../components/Card/MoodCard'

const title = '당신의 꿈은 어땠을까요?'
const word = '꿈 단어'
const analysis = '꿈 분석'
const story = 'Dream Story'
const analresult = '분석 결과'
const date = format(new Date(), 'yyyy-MM-dd')

// @ts-ignore
export default function ResultPage({navigation, route}) {
  const day = route.params.date
  console.log(day)
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} type={'BACK'} date={day} />
        <View style={[styles.flex]}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.wordContainer}>
            <View>
              <Text style={styles.text}>{word}</Text>
              <View style={styles.wordBox} />
            </View>
            <View>
              <Text style={styles.text}>{analysis}</Text>
              <View style={styles.wordBox}>
                <MoodCard type={'행복'} />
              </View>
            </View>
          </View>
          <View style={styles.diaryContainer}>
            <Text style={styles.text}>{story}</Text>
            <View style={styles.diaryBox} />
          </View>
          <View style={styles.diaryContainer}>
            <Text style={styles.text}>{analresult}</Text>
            <View style={styles.resultBox} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: '#ffffff',
    marginBottom: 10,
  },
  padding: {padding: 25, paddingLeft: 0, paddingRight: 0},
  wordBox: {
    height: 145,
    width: 145,
    marginLeft: 35,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  diaryBox: {
    height: 240,
    width: 325,
    marginLeft: 35,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  resultBox: {
    height: 82,
    width: 325,
    marginLeft: 35,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 35,
  },
  wordContainer: {
    flexDirection: 'row',
  },
  diaryContainer: {
    marginTop: 5,
  },
  smallTitle: {fontSize: 30, marginTop: 21, paddingLeft: 34, color: '#ffffff'},
  smallBox: {
    width: 254,
    height: 150,
    backgroundColor: '#ded9ed',
    opacity: 0.57,
    marginTop: 0,
    marginLeft: 20,
  },
  back: {marginTop: 30, marginLeft: 20},
})
