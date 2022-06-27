import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const title = 'Dream'
export default function Dream() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#000000',
  },
})
