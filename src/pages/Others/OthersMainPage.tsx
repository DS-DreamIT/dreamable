import React, {useState} from 'react'
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

  const [refreshing, setRefreshing] = useState(false)

  const onRefreshFalse = () => {
    setRefreshing(true)
  }

  const onRefreshTrue = () => {
    setRefreshing(false)
  }

  return (
    <ImageBackground
      source={require('../../assets/images/background-others.png')}
      style={styles.bgImage}>
      <TouchableOpacity
        onPress={() => {
          refreshing ? onRefreshTrue() : onRefreshFalse()
        }}>
        <Image
          source={require('../../assets/icons/refresh.png')}
          style={styles.refreshImg}
        />
      </TouchableOpacity>
      <Text style={styles.mainText}>
        하루에 단 한 번,{'\n'} 타인의 꿈을 소개해드려요.
      </Text>
      <View style={styles.leftCloudyView}>
        <TouchableOpacity
          style={styles.leftCloudy}
          onPress={() => {
            navigation.navigate('OthersDiaryPage', {
              mood: setTextRandomMood[0],
            })
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
            navigation.navigate('OthersDiaryPage', {
              mood: setTextRandomMood[1],
            })
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
            navigation.navigate('OthersDiaryPage', {
              mood: setTextRandomMood[2],
            })
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
  mainText: {
    fontFamily: 'SCDream5-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 28,
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
