import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import TopBar from '../../components/Common/TopBar'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage'

// @ts-ignore
export default function TravelPage({navigation, route}) {
  const [othersDiary, setOthersDiary] = useState([])
  const [userId, setUserId] = useState('')

  const createRandomNum = () => {
    let num = Math.floor(Math.random() * route.params.emotion.length)

    return num
  }

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      setUserId(JSON.parse(user).id)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetch(
        `${Config.API_URL}/api/diary/emotion/${
          route.params.emotion[createRandomNum()]
        }/user/${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            if (othersDiary.length === 0) {
              setOthersDiary(response.diary)
            }
          }
        })
    }
  }, [userId])

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} type={'HOME'} />
        <View>
          <Image
            source={require('../../assets/icons/flight.png')}
            style={styles.flightPNG}
          />
          <Text style={styles.titleText}>타인의 꿈 여행하기</Text>
        </View>
        <View style={styles.feelingsView}>
          {route.params?.emotion.map(emotion => (
            <Text style={styles.feelingsText}>#{emotion} </Text>
          ))}
        </View>
        <View style={styles.travelView}>
          {othersDiary.length < 1 ? (
            <Text style={styles.travelText}>
              {route.params?.emotion.map(emotion => (
                <Text style={styles.travelText}>'{emotion}' </Text>
              ))}
              에 해당하는 꿈이 아직 없어요
            </Text>
          ) : (
            <Text style={styles.travelText}>{othersDiary.content}</Text>
          )}
        </View>
        <Image
          source={require('../../assets/icons/line.png')}
          style={styles.bottomLine}
        />
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
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'SCDream5',
  },
  flightPNG: {
    marginLeft: 310,
  },
  feelingsView: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  feelingsText: {
    color: '#FFFFFF',
    marginTop: 25,
    fontSize: 22,
  },
  TopLine: {
    marginTop: 40,
    marginLeft: 85,
  },
  bottomLine: {
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
    color: '#000000',
    fontFamily: 'SCDream4',
  },
})
