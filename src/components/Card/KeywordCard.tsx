import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

//@ts-ignore
const KeywordCard = ({keyword}) => {
  return (
    <View style={styles.container}>
      <Image style={[]} source={require('../../assets/icons/mini-moon.png')} />
      <Text style={styles.margin}>{keyword}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 7,
  },
  margin: {
    marginLeft: 5,
    color: 'white',
    fontFamily: 'SCDream4',
  },
})

export default KeywordCard
