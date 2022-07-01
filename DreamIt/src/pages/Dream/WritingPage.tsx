import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import Currentdate from '../../components/Write/CurrentDate'
import TopBar from '../../components/Common/TopBar'
import Uploadfiles from '../../components/Write/UploadFiles'
import Writing from '../../components/Write/Writing'

// @ts-ignore
export default function WritingPage({navigation}) {
  return (
    <View style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} />
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
