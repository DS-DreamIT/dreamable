import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const dateTime = new Date()
const curYear = dateTime.getFullYear()
const curMonth = dateTime.getMonth() + 1
const curDate = dateTime.getDate()

const Currentdate = () => {
  return (
    <View>
      <Text style={[styles.date]}>
        {curYear}.0{curMonth}.{curDate}
      </Text>
      <View style={[styles.line]} />
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 3,
    borderColor: '#ffffff',
    width: 158,
    marginLeft: 41,
  },
  date: {
    marginLeft: 41,
    marginTop: 13,
    fontSize: 28,
    color: '#ffffff',
  },
})

export default Currentdate
