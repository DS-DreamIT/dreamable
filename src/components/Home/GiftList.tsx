//@ts-nocheck
import React from 'react'
import Gift from './Gift'
import EmotionData from '../../assets/data/EmotionData'
import {format} from 'date-fns'

const GiftList = ({data, navigation}) => {
  const List = Object.entries(data).map((diary, idx) => {
    const date = format(new Date(diary[1].createdAt), 'MM/dd')
    let emotion = diary[1].emotion[0]
    let color = ''
    EmotionData.forEach(e => {
      if (e.kor === emotion) {
        color = e.color
      }
    })
    if (!color) {
      // 감정이 없는 꿈
      color = '#858585'
    }
    return (
      <Gift
        key={idx}
        data={diary}
        color={color}
        date={date}
        navigation={navigation}
      />
    )
  })
  return <>{List}</>
}

export default GiftList
