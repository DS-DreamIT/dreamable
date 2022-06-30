import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import Currentdate from './CurrentDate'
import TopBar from './TopBar'
import Uploadfiles from './UploadFiles'
import Writing from './Writing'

const dateTime = new Date()

export default function WritingDiary() {
  return (
    <View style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('./assets/images/bg-dreamable.png')}>
        <TopBar />
        <Currentdate />
        <Writing />
        <Uploadfiles />
        <View style={[styles.line]} />
        <Text style={[styles.writingText]}>선물상자에 {'\n'}나의 꿈 담기</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    borderColor: '#DDCEFF',
    width: 187,
    marginHorizontal: 101,
    marginBottom: 19,
  },
  flex: {
    flex: 1,
  },
  view: {
    backgroundColor: '#DDCEFF',
    marginHorizontal: 38,
    opacity: 0.7,
    height: 397,
    borderRadius: 4,
    marginTop: 13,
  },
  writingText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
  },
})
