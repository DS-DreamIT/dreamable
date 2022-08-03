import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import TopBar from '../../components/Common/TopBar'

// @ts-ignore
export default function AdvicePage({navigation}) {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} />
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
          <Text style={styles.travelText}>히히</Text>
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
    fontStyle: 'italic',
  },
  TopFlowerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  TopFlowerImg: {
    marginTop: 25,
    marginRight: 30,
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
    margin: 5,
    alignSelf: 'center',
  },
  BottomFlowerView: {
    flexDirection: 'row',
  },
  bottomFlower: {
    marginTop: 25,
    marginLeft: 30,
  },
})
