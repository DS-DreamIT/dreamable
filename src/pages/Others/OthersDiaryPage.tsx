import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native'
import TopBar from '../../components/Common/TopBar'

// @ts-ignore
export default function OthersDiaryPage({navigation}) {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background-others.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} />
        <Text style={styles.moodText}>#슬픔 #쓸쓸</Text>
        <View style={styles.dreamBox}>
          <Text style={styles.dreamText}>히히</Text>
        </View>
        <View style={styles.likeView}>
          <Image
            source={require('../../assets/icons/like.png')}
            style={styles.likeImg}
          />
          <Text style={styles.likeText}>16</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  moodText: {
    color: '#FFFFFF',
    fontSize: 26,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  dreamBox: {
    backgroundColor: '#D4CCE8',
    alignSelf: 'center',
    width: '85%',
    height: '63%',
    marginTop: 20,
    borderRadius: 5,
    opacity: 0.7,
  },
  dreamText: {
    margin: 5,
    alignSelf: 'center',
  },
  likeView: {
    flexDirection: 'row',
  },
  likeImg: {
    marginTop: 25,
    marginLeft: 35,
    // tintColor: '#FF0000',  // 색상 빨간색으로?
  },
  likeText: {
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
  },
})
