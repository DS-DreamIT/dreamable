import {format} from 'date-fns'
import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ImageBackground, Text} from 'react-native'
import CalendarView from '../../components/Calendar/CalendarView'
import Config from 'react-native-config'
import TopBar from '../../components/Common/TopBar'
import * as Progress from 'react-native-progress'
import AsyncStorage from '@react-native-async-storage/async-storage'

const happy = {key: 'happy', color: '#FFD233'}
const neutrality = {key: 'neutrality', color: '#000470'}
const sad = {key: 'sad', color: '#5E9BE2'}
const fear = {key: 'fear', color: '#000000'}
const anger = {key: 'anger', color: '#E14A4A'}
const anxiety = {key: 'anxiety', color: '#00D33B'}
const surprised = {key: 'surprised', color: '#F49D5D'}
const flutter = {key: 'flutter', color: '#F8A5CF'}
const none = {key: 'none', color: '#858585'}

// @ts-ignore
export default function CalendarPage({navigation}) {
  const [spinner, setSpinner] = useState(true)
  const [userId, setUserId] = useState('')
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  )
  const [diaries, setDiaries] = useState([])

  const [markedDates, setMarkedDates] = useState({})

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      setUserId(JSON.parse(user).id)
    })
  }, [])

  // 사용자가 작성한 일기 데이터
  useEffect(() => {
    // data를 배열 형태로 받아오기
    if (diaries.length != 0) {
      const getEntries = Object.entries(diaries).map((entrie, idx) => {
        return entrie
      })
      setSpinner(true)
      // reduce를 사용하여 객체 처리
      let mark = getEntries.reduce((acc, current) => {
        //@ts-ignore
        const formattedDate = format(
          new Date(current[1].createdAt),
          'yyyy-MM-dd',
        )
        // @ts-ignore
        acc[formattedDate] = {dots: getEomtions(current)}
        return acc
      }, {})
      setMarkedDates(mark)
      setSpinner(false)
    }
  }, [diaries])

  useEffect(() => {
    if (userId) {
      fetch(`${Config.API_URL}/api/diary/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            // 유저 다이어리 목록 불러옴
            setDiaries(response.diaries)
          }
        })
    }
  }, [userId])

  // @ts-ignore
  const getEomtions = day => {
    let emotions = new Array()
    const loadEmotions = day[1].emotion
    if (loadEmotions.includes('행복')) emotions.push(happy)
    if (loadEmotions.includes('중립')) emotions.push(neutrality)
    if (loadEmotions.includes('슬픔')) emotions.push(sad)
    if (loadEmotions.includes('공포')) emotions.push(fear)
    if (loadEmotions.includes('화남')) emotions.push(anger)
    if (loadEmotions.includes('긴장')) emotions.push(anxiety)
    if (loadEmotions.includes('놀람')) emotions.push(surprised)
    if (loadEmotions.includes('설렘')) emotions.push(flutter)
    if (loadEmotions.length === 0) emotions.push(none)

    return emotions
  }

  return (
    <View style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} type={'BACK'} />
        <Text style={styles.text}>Calendar</Text>
        {spinner ? (
          <View style={[styles.spinner]}>
            <Progress.Circle
              size={30}
              indeterminate={true}
              borderColor={'#ffffff'}
            />
          </View>
        ) : (
          <CalendarView
            navigation={navigation}
            markedDates={markedDates}
            selectedDate={selectedDate}
            getDatas={diaries}
          />
        )}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'SCDream5-Regular',
  },
  flex: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
