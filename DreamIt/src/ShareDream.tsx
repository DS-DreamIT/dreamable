import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, ImageBackground, ActivityIndicatorComponent, Image, BackHandler, Alert} from 'react-native'


const title = 'Share your Dreams'
const smalltitle= 'Personal Dream'
const mood1= '쓸쓸'
const mood2= '슬픔'
const mood3= '우울'
export default function ShareDream() {
  return <SafeAreaView style={styles.flex}>
      <ImageBackground
      style={[styles.flex]}
      source={require('./assets/images/dream-bg.png')} >
          <Image style={styles.back} source={require('./assets/images/back.png')} />
          <View style={[styles.flex, styles.padding89]}>
              <Text style={styles.text}>{title}</Text>
              <View style={styles.sepline}/>
              <View style={styles.bigbox}>
                  <Text style={styles.smalltitle}>{smalltitle}</Text>
                  <Image style={[styles.image]} source={require('./assets/images/cloudy.png')}></Image>

                  <View style={styles.smallbox}>

                  </View>
              </View>
              <View style={styles.sepunderline}/>
              <View style={styles.iconstyle}>
              <Image source={require('./assets/images/kakao.png')} />
              <Image style={styles.icon} source={require('./assets/images/insta.png')} />
              <Image style={styles.icon} source={require('./assets/images/save.png')} />
              </View>
              
              
              </View>

              
      </ImageBackground>
      
      </SafeAreaView>

  
}

const styles = StyleSheet.create({
    flex: {flex: 1},
    text: {textAlign: 'center', fontSize: 40, color: '#ce93d8', marginBottom: 10},
    padding89: {padding: 25, paddingLeft: 0, paddingRight: 0},
    sepline: { borderWidth: 1, borderColor: '#ffffff', width: 154, marginLeft: 235},
    sepunderline: { borderWidth: 1, borderColor: '#ffffff', width: 154, marginTop: 27},
    bigbox: {height: 400, width: 294, backgroundColor: '#ddceff', marginLeft: 50, marginTop: 27, opacity: 0.65},
    image: {paddingLeft: 0, paddingRight: 0, marginTop: 25, marginLeft: 20},
    smalltitle: {fontSize: 30, marginTop: 21, paddingLeft: 34, color: '#ffffff'},
    smallbox: {width: 254, height: 150, backgroundColor: '#ded9ed', opacity: 0.57, marginTop: 0, marginLeft: 20},
    iconstyle: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15},
    icon: {marginLeft: 40},
    back: {marginTop: 30, marginLeft: 20}
})
