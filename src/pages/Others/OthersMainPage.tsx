import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

// @ts-ignore
export default function OthersMainPage({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/images/background-others.png')}
      style={styles.bgImage}>
      <Text style={styles.mainText}>
        하루에 단 한 번,{'\n'} 타인의 꿈을 소개해드려요.
      </Text>
      <View style={styles.leftCloudyView}>
        <TouchableOpacity
          style={styles.leftCloudy}
          onPress={() => {
            navigation.navigate('OthersDiaryPage', {screen: 'OthersDiaryPage'})
          }}>
          <Image
            source={require('../../assets/icons/cloudy.png')}
            style={styles.leftCloudy}
          />
          <Text style={styles.leftCloudyText}>#슬픔</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightCloudyView}>
        <TouchableOpacity
          style={styles.rightCloudy}
          onPress={() => {
            navigation.navigate('OthersDiaryPage', {screen: 'OthersDiaryPage'})
          }}>
          <Image
            source={require('../../assets/icons/cloudy.png')}
            style={styles.rightCloudy}
          />
          <Text style={styles.rightCloudyText}>#행복</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.leftCloudyView}>
        <TouchableOpacity
          style={styles.leftCloudy}
          onPress={() => {
            navigation.navigate('OthersDiaryPage', {screen: 'OthersDiaryPage'})
          }}>
          <Image
            source={require('../../assets/icons/cloudy.png')}
            style={styles.leftCloudy}
          />
          <Text style={styles.leftCloudyText}>#설렘</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
  mainText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 30,
    marginBottom: 10,
  },
  leftCloudyView: {
    alignItems: 'flex-start',
    height: 180,
  },
  leftCloudy: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    right: 55,
    position: 'absolute',
  },
  leftCloudyText: {
    color: '#000000',
    fontSize: 24,
    marginTop: 68,
    marginLeft: 120,
  },
  rightCloudyView: {
    alignItems: 'flex-end',
    height: 180,
  },
  rightCloudy: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    left: 55,
    position: 'absolute',
  },
  rightCloudyText: {
    color: '#000000',
    fontSize: 24,
    marginTop: 68,
    marginLeft: 215,
  },
})
