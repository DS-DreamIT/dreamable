import {Image, StyleSheet, Text, View} from 'react-native'
import MoodData from '../../assets/data/MoodData'
import React from 'react'

type Props = {
  type: string
}

const MoodCard = ({type}: Props) => {
  const mood = MoodData.find(data => data.kor === type)
  return (
    <View style={dstyles.container}>
      {mood && (
        <>
          <Image
            style={[styles(mood.color).content, dstyles.margin]}
            source={mood.src}
          />
          <Text style={styles(mood.color).content}>{mood.kor}</Text>
        </>
      )}
    </View>
  )
}

const styles = (color: any) =>
  StyleSheet.create({
    content: {
      color: color,
      tintColor: color,
    },
  })

const dstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  margin: {
    marginRight: 3,
  },
})

export default MoodCard
