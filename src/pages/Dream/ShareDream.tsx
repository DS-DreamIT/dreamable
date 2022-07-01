import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet, SafeAreaView} from 'react-native'
import TopBar from '../../components/Common/TopBar'

const title = 'Share your Dreams';
const smallTitle = 'Personal Dream';

// @ts-ignore
export default function ShareDream({navigation}) {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} />
        <View style={[styles.flex, styles.padding89]}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.sepline} />
          <View style={styles.bigbox}>
            <Text style={styles.smalltitle}>{smallTitle}</Text>
            <Image
              style={[styles.image]}
              source={require('../../assets/icons/cloudy.png')}
            />
            <View style={styles.smallbox} />
          </View>
          <View style={styles.sepunderline} />
          <View style={styles.iconstyle}>
            <Image source={require('../../assets/icons/share-kakao.png')} />
            <Image
              style={styles.icon}
              source={require('../../assets/icons/share-instagram.png')}
            />
            <Image
              style={styles.icon}
              source={require('../../assets/icons/share-save.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  text: {textAlign: 'center', fontSize: 40, color: '#ce93d8', marginBottom: 10},
  padding89: {padding: 25, paddingLeft: 0, paddingRight: 0},
  sepline: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 154,
    marginLeft: 235,
  },
  sepunderline: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 154,
    marginTop: 27,
  },
  bigbox: {
    height: 400,
    width: 294,
    backgroundColor: '#ddceff',
    marginLeft: 50,
    marginTop: 27,
    opacity: 0.65,
  },
  image: {paddingLeft: 0, paddingRight: 0, marginTop: 25, marginLeft: 20},
  smalltitle: {fontSize: 30, marginTop: 21, paddingLeft: 34, color: '#ffffff'},
  smallbox: {
    width: 254,
    height: 150,
    backgroundColor: '#ded9ed',
    opacity: 0.57,
    marginTop: 0,
    marginLeft: 20,
  },
  iconstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {marginLeft: 40},
  back: {marginTop: 30, marginLeft: 20},
});
