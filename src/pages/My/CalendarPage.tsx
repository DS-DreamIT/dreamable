import {format} from 'date-fns'
import React, {useState} from 'react'
import {View, StyleSheet, ImageBackground, Text} from 'react-native'
import CalendarView from '../../components/Calendar/CalendarView'
import data from './data.json'

const happy = {key: 'happy', color: '#FFD233'}
const neutrality = {key: 'neutrality', color: '#000470'}
const sad = {key: 'sad', color: '#5E9BE2'}
const fear = {key: 'fear', color: '#000000'}
const anger = {key: 'anger', color: '#E14A4A'}
const unrest = {key: 'unrest', color: '#00D33B'}
const surprised = {key: 'surprised', color: '#F49D5D'}
const flutter = {key: 'flutter', color: '#F8A5CF'}

// data를 배열 형태로 받아오기
const getEntries = Object.entries(data).map((entrie, idx) => {
  return entrie
})

// @ts-ignore
export default function CalendarPage({navigation}) {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  )

  // @ts-ignore
  const getEomtions = day => {
    let emotions = new Array()
    const loadEmotions = day[1].emotion
    if (loadEmotions.includes('행복')) emotions.push(happy)
    if (loadEmotions.includes('중립')) emotions.push(neutrality)
    if (loadEmotions.includes('슬픔')) emotions.push(sad)
    if (loadEmotions.includes('공포')) emotions.push(fear)
    if (loadEmotions.includes('화남')) emotions.push(anger)
    if (loadEmotions.includes('긴장')) emotions.push(unrest)
    if (loadEmotions.includes('놀람')) emotions.push(surprised)
    if (loadEmotions.includes('설렘')) emotions.push(flutter)

    return emotions
  }

  // reduce를 사용하여 객체 처리
  const markedDates = getEntries.reduce((acc, current) => {
    const formattedDate = format(new Date(current[1].date), 'yyyy-MM-dd')
    // @ts-ignore
    acc[formattedDate] = {dots: getEomtions(current)}
    return acc
  }, {})

  return (
    <View style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <Text style={styles.text}>Calendar</Text>
        <View style={styles.line} />
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
    color: '#ffffff',
  },
  line: {
    borderBottomWidth: 2,
    borderColor: '#ffffff',
    width: 'auto',
    marginTop: 7,
  },
  flex: {
    flex: 1,
  },
})