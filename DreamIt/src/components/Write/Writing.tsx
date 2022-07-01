import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Writing = () => {
  return (
    <View style={[styles.view]}>
      <TextInput style={styles.text} multiline={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#DDCEFF',
    marginHorizontal: 38,
    opacity: 0.7,
    width: 315,
    height: 397,
    borderRadius: 4,
    marginTop: 13,
  },
  text: {
    flexShrink: 1,
    fontSize: 16,
    color: '#000000',
    padding: 12,
  },
})

export default Writing
