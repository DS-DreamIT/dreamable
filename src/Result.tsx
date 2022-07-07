import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet, SafeAreaView} from 'react-native'
import TopBar from './components/Common/TopBar'
import MoodData from './mooddata';

const title = '당신의 꿈은 어땠을까요?';
const word = '꿈 단어';
const analysis = '꿈 분석';
const story = 'Dream Story';
const analresult = '분석 결과';
const colorhappy = MoodData[0].moodcolor;
const colorneutral = MoodData[1].moodcolor;
const colorsad = MoodData[2].moodcolor;
const colorhorror = MoodData[3].moodcolor;
const coloranger = MoodData[4].moodcolor;
const coloranxiety = MoodData[5].moodcolor;
const colorsurprise = MoodData[6].moodcolor;

// @ts-ignore
export default function Result() {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../src/assets/images/background.png')}>
        <View style={[styles.flex, styles.padding]}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.firstset}>
            <View>
              <Text style={styles.wordstyle}>{word}</Text>
              <View style={styles.firstbox}></View>
            </View>
            <View>
              <Text style={styles.wordstyle}>{analysis}</Text>
              <View style={styles.firstbox}>
                <View style={styles.firstset}>
                  <Image style={styles.moodhappy} source={require('../src/assets/icons/star.png')}/>
                  <Text style={styles.moodhappy}>{MoodData[0].mood}</Text>
                </View>
                <View style={styles.firstset}>
                  <Image style={styles.moodneutral} source={require('../src/assets/icons/star.png')}/>
                  <Text style={styles.moodneutral}>{MoodData[1].mood}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleset}>
              <Text style={styles.wordstyle}>{story}</Text>
              <View style={styles.middlebox}></View>
          </View>
          <View style={styles.middleset}>
              <Text style={styles.wordstyle}>{analresult}</Text>
              <View style={styles.lastbox}></View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  text: {textAlign: 'center', fontSize: 32, color: '#ffffff', marginBottom: 10},
  padding: {padding: 25, paddingLeft: 0, paddingRight: 0},
  firstbox: {
    height: 145,
    width: 145,
    marginLeft: 35,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  middlebox: {
    height: 240,
    width: 325,
    marginLeft: 35,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  lastbox: {
    height: 82,
    width: 325,
    marginLeft: 35,
    marginTop: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  wordstyle: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 35,
  },
  smalltitle: {fontSize: 30, marginTop: 21, paddingLeft: 34, color: '#ffffff'},
  firstset: {
    flexDirection: 'row',
  },
  middleset: {
    marginTop: 5
  },
  smallbox: {
    width: 254,
    height: 150,
    backgroundColor: '#ded9ed',
    opacity: 0.57,
    marginTop: 0,
    marginLeft: 20,
  },
  moodhappy: {
    color: colorhappy,
    tintColor: colorhappy
  },
  moodneutral: {
    color: colorneutral,
    tintColor: colorneutral
  },
  moodsad: {
    color: colorsad,
    tintColor: colorsad
  },
  moodhorror: {
    color: colorhorror,
    tintColor: colorhorror
  },
  moodanger: {
    color: coloranger,
    tintColor: coloranger
  },
  moodsurprise: {
    color: colorsurprise,
    tintColor: colorsurprise
  },
  back: {marginTop: 30, marginLeft: 20},
});
