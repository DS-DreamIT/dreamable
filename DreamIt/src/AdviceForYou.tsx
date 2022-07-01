import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'

export default function DreamTravel() {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.bgImage}>
        <Image
          source={require('./assets/images/goBack.png')}
          style={styles.gobackPNG}
        />
        <Text style={styles.titleText}>Advice for You</Text>
        <View style={styles.TopFlowerView}>
          <Image
            source={require('./assets/images/flower.png')}
            style={styles.TopFlowerImg}
          />
          <Image
            source={require('./assets/images/line.png')}
            style={styles.line}
          />
        </View>
        <View style={styles.travelView}>
          <Text style={styles.travelText}>히히</Text>
        </View>
        <View style={styles.BottomFlowerView}>
          <Image
            source={require('./assets/images/line.png')}
            style={styles.line}
          />
          <Image
            source={require('./assets/images/fullFlower.png')}
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
  gobackPNG: {
    marginTop: 20,
    marginLeft: 10,
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
  },
  travelText: {
    margin: 5,
  },
  BottomFlowerView: {
    flexDirection: 'row',
  },
  bottomFlower: {
    marginTop: 25,
    marginLeft: 30,
  },
})
