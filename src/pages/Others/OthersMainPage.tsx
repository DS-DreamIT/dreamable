import React, {useEffect, useState} from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// @ts-ignore
export default function OthersMainPage({navigation}) {
  const [click, setClick] = useState(false)
  const [prevClickTime, setPrevClickTime] = useState('')

  const moodWord = [
    '행복',
    '중립',
    '슬픔',
    '공포',
    '분노',
    '혐오',
    '불안',
    '놀람',
    '설렘',
  ]

  const newMoodWord = [...moodWord]
  const setTextRandomMood: any[] = []

  const getRandomWord = (mood: string[]) => {
    const moodWordIndex = Math.floor(Math.random() * mood.length)
    setTextRandomMood.push(newMoodWord[moodWordIndex])
    newMoodWord.splice(moodWordIndex, 1)

    return setTextRandomMood[setTextRandomMood.length - 1]
  }

  const check = async () => {
    const time = new Date().getDate()
    await AsyncStorage.setItem('time', time.toString())
    setClick(false)
  }

  useEffect(() => {
    async function checkDate() {
      console.disableYellowBox = true
      let today = new Date().getDate()
      AsyncStorage.getItem('time').then(time => {
        setPrevClickTime(JSON.parse(time))
      })
      if (
        prevClickTime === null ||
        prevClickTime === undefined ||
        prevClickTime === ''
      ) {
        setClick(true)
      } else {
        const diff = Math.floor(
          (today - Number(prevClickTime)) / (1000 * 60 * 60 * 24),
        )
        console.log(diff)
        if (diff > 0) {
          setClick(true)
        }
      }
    }
    checkDate()
  }, [])

  return (
    <ImageBackground
      source={require('../../assets/images/background-others.png')}
      style={styles.bgImage}>
      <View style={styles.mainView}>
        <Text style={styles.mainText}>
          하루에 단 한 번,{'\n'} 타인의 꿈을 소개해드려요.
        </Text>
      </View>
      <View style={styles.leftCloudyView}>
        <TouchableOpacity
          style={styles.leftCloudy}
          onPress={() => {
            {
              click
                ? navigation.navigate(
                    'OthersDiaryPage',
                    {
                      mood: setTextRandomMood[0],
                    },
                    check(),
                  )
                : Alert.alert(
                    '잠시만요 !',
                    '하루에 한 번만 타인의 꿈을 볼 수 있습니다.',
                  )
            }
          }}>
          <Image
            source={require('../../assets/icons/cloudy.png')}
            style={styles.leftCloudy}
          />
          <Text style={styles.leftCloudyText}>
            #{getRandomWord(newMoodWord)}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightCloudyView}>
        <TouchableOpacity
          style={styles.rightCloudy}
          onPress={() => {
            {
              click
                ? navigation.navigate(
                    'OthersDiaryPage',
                    {
                      mood: setTextRandomMood[1],
                    },
                    check(),
                  )
                : Alert.alert(
                    '잠시만요 !',
                    '하루에 한 번만 타인의 꿈을 볼 수 있습니다.',
                  )
            }
          }}>
          <Image
            source={require('../../assets/icons/cloudy.png')}
            style={styles.rightCloudy}
          />
          <Text style={styles.rightCloudyText}>
            #{getRandomWord(newMoodWord)}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.leftCloudyView}>
        <TouchableOpacity
          style={styles.leftCloudy}
          onPress={() => {
            {
              click
                ? navigation.navigate(
                    'OthersDiaryPage',
                    {
                      mood: setTextRandomMood[2],
                    },
                    check(),
                  )
                : Alert.alert(
                    '잠시만요 !',
                    '하루에 한 번만 타인의 꿈을 볼 수 있습니다.',
                  )
            }
          }}>
          <Image
            source={require('../../assets/icons/cloudy.png')}
            style={styles.leftCloudy}
          />
          <Text style={styles.leftCloudyText}>
            #{getRandomWord(newMoodWord)}
          </Text>
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
  refreshImg: {
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'flex-end',
    tintColor: '#FFFFFF',
  },
  mainView: {
    marginTop: 50,
  },
  mainText: {
    fontFamily: 'SCDream5-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
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
    color: '#271F50',
    fontSize: 24,
    marginTop: 65,
    marginLeft: 120,
    fontFamily: 'SCDream3',
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
    color: '#271F50',
    fontSize: 24,
    marginTop: 65,
    marginLeft: 220,
    fontFamily: 'SCDream3',
  },
})
