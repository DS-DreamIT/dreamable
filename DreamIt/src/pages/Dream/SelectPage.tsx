import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, TouchableHighlight} from 'react-native'
import SelectCard from '../../components/SelectCard'

const background = require('../../assets/images/background.png')

export default function SelectPage({navigation}) {
  return (
    <ImageBackground source={background} style={styles.bgImage}>
      <View style={[styles.arrow, styles.button]}>
        <TouchableHighlight onPress={() => navigation.pop()}>
          <Image
            source={require('../../assets/icons/arrow-back.png')}
            style={[{width: 43}]}
          />
        </TouchableHighlight>
      </View>
      <View style={[styles.textView, styles.container]}>
        <Text style={styles.headText}>3일 후에 꿈을 선물해드릴게요 !</Text>
        <Text style={styles.subText}>혹시 더 필요한 게 있으신가요?</Text>
      </View>
      <View style={[styles.boxView, styles.container]}>
        <SelectCard />
        <SelectCard />
        <SelectCard />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  button: {
    paddingLeft: 13,
    alignItems: 'flex-start',
  },
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  arrow: {
    flex: 0.1,
    padding: 13,
  },
  textView: {
    flex: 0.2,
  },
  boxView: {
    flex: 1,
  },
  padding: {
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  headText: {
    fontSize: 20,
    color: '#ffffff',
    paddingBottom: 12,
  },
  subText: {
    fontSize: 16,
    color: '#ffffff',
  },
})
