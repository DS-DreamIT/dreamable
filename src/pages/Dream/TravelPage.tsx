import {format} from 'date-fns'
import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'
import TopBar from '../../components/Common/TopBar'
import Config from 'react-native-config'

// @ts-ignore
export default function TravelPage({navigation}) {
  const [othersDiary, setOthersDiary] = useState({}) // 다른 사용자 일기
  const [emotion, setEmotion] = useState('')
  const userId = '62df4bc8f1ff31b19db9ace9' // 임시

  useEffect(() => {
    console.log(emotion)
  }, [emotion])

  useEffect(() => {
    // 가장 최근에 작성한 일기의 감정
    fetch(`${Config.API_URL}/api/diary/recent/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          // 사용자의 감정 중 임의로 한 가지와 관련된 일기를 가져오고자 함
          if (response.diary.emotion == null) {
            // emotion이 없을 때
            setOthersDiary('해당하는 감정의 일기가 없습니다.')
          } else {
            console.log(response.diary.emotion?.length)
            getOthersDiary(
              response.diary.emotion[
                createRandomNum(response.diary.emotion?.length)
              ],
            )
          }
        }
      })
  }, [])

  //@ts-ignore
  const createRandomNum = arraySize => {
    let num = Math.floor(Math.random() * arraySize)

    return num
  }

  // @ts-ignore
  const getOthersEmotion = emotionArray => {
    // 비슷한 키워드: 타인의 일기에 해당, 비슷한 감정
    let emotionText = ''

    for (let i = 0; i < emotionArray.length; i++) {
      emotionText += '#' + emotionArray[i] + ' '
    }
    setEmotion(emotionText)
  }

  // @ts-ignore
  const getOthersDiary = emotion => {
    fetch(`${Config.API_URL}/api/diary/emotion/${emotion}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          // + if 넣어서 작성자가 사용자 id와 다른 일기 가져오기
          console.log(response.diary)
          setOthersDiary(response.diary)
          getOthersEmotion(response.diary.emotion)
        }
      })
  }

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} />
        <View>
          <Image
            source={require('../../assets/icons/flight.png')}
            style={styles.flightPNG}
          />
          <Text style={styles.titleText}>타인의 꿈 여행하기</Text>
        </View>
        <View style={styles.feelingsView}>
          {emotion ? <Text style={styles.feelingsText}>{emotion}</Text> : <></>}
          <Image
            source={require('../../assets/icons/line.png')}
            style={styles.line}
          />
        </View>
        <View style={styles.travelView}>
          <Text style={styles.travelText}>{othersDiary.content}</Text>
        </View>
        <Image
          source={require('../../assets/icons/line.png')}
          style={styles.line}
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
    justifyContent: 'flex-end',
  },
  feelingsText: {
    color: '#FFFFFF',
    marginTop: 25,
    marginLeft: 41,
    fontSize: 22,
    marginRight: 'auto',
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
})
