import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import TopBar from '../../components/Common/TopBar'
import EmotionData from '../../assets/data/EmotionData'

// @ts-ignore
export default function AdvicePage({navigation, route}) {
  const advice = () => {
    const emotion = route.params.emotion[0]
    if (emotion === '놀람') {
      return EmotionData[0].long
    }
    if (emotion === '설렘') {
      return EmotionData[1].long
    }
    if (emotion === '행복') {
      return EmotionData[2].long
    }
    if (emotion === '중립') {
      return EmotionData[3].long
    }
    if (emotion === '슬픔') {
      return EmotionData[4].long
    }
    if (emotion === '공포') {
      return EmotionData[5].long
    }
    if (emotion === '분노') {
      return EmotionData[6].long
    }
    if (emotion === '불안') {
      return EmotionData[7].long
    }
  }

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} type={'HOME'} />
        <Text style={styles.titleText}>Advice for You</Text>
        <View style={styles.TopFlowerView}>
          <Image
            source={require('../../assets/icons/flower-default.png')}
            style={styles.TopFlowerImg}
          />
          <Image
            source={require('../../assets/icons/line.png')}
            style={styles.line}
          />
        </View>
        <View style={styles.travelView}>
          <Text style={styles.travelText}>{advice()}</Text>
        </View>
        <View style={styles.BottomFlowerView}>
          <Image
            source={require('../../assets/icons/line.png')}
            style={styles.line}
          />
          <Image
            source={require('../../assets/icons/flower-full.png')}
            style={styles.bottomFlower}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#CE93D8',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'RobotoLightItalic',
  },
  TopFlowerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  TopFlowerImg: {
    marginTop: 25,
    marginRight: 25,
  },
  line: {
    marginTop: 40,
  },
  travelView: {
    alignSelf: 'center',
    width: '80%',
    height: '55%',
    marginTop: 30,
    backgroundColor: '#DDCEFF',
    borderRadius: 5,
    opacity: 0.7,
  },
  travelText: {
    margin: 10,
    alignSelf: 'center',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'SCDream4',
    lineHeight: 30,
  },
  BottomFlowerView: {
    flexDirection: 'row',
  },
  bottomFlower: {
    marginTop: 25,
    marginLeft: 25,
  },
})
