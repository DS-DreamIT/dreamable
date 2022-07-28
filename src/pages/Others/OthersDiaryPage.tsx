import React, {useEffect, useState} from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Config from 'react-native-config'
import TopBar from '../../components/Common/TopBar'

// @ts-ignore
export default function OthersDiaryPage({navigation, route}) {
  const [heart, setHeart] = useState(false)
  const [like, setLike] = useState(0)
  const [diary, setDiary] = useState([])
  const userId = '62df4bc8f1ff31b19db9ace9' // 임시

  const updateHeart = () => {
    fetch(`${Config.API_URL}/api/diary/${diary._id}/likes/user/${userId}`, {
      method: 'PUT',
    }).then(response => console.log(response))
  }
  const clickLike = () => {
    setHeart(false)
    setLike(prev => prev - 1)
    updateHeart()
  }

  const unClickLike = () => {
    setHeart(true)
    setLike(prev => prev + 1)
    updateHeart()
  }

  useEffect(() => {
    fetch(`${Config.API_URL}/api/diary/emotion/${route.params.mood}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          setDiary(response.diary)
          setLike(response.diary.likes)
          if (response.like_list.includes(userId)) {
            setHeart(true)
          }
        }
      })
  }, [])

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background-others.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} />
        <Text style={styles.moodText}>#{route.params.mood}</Text>
        <View style={styles.dreamBox}>
          <Text style={styles.dreamText}>{diary.content}</Text>
        </View>
        <View style={styles.likeView}>
          <TouchableOpacity
            onPress={() => {
              heart ? clickLike() : unClickLike()
            }}
            style={styles.likeImg}>
            <Image
              source={
                heart
                  ? require('../../assets/icons/heart-selected.png')
                  : require('../../assets/icons/heart-default.png')
              }
            />
          </TouchableOpacity>
          <Text style={styles.likeText}>{like}</Text>
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
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  dreamBox: {
    backgroundColor: '#D4CCE8',
    alignSelf: 'center',
    width: '85%',
    height: '63%',
    marginTop: 20,
    borderRadius: 5,
    opacity: 0.8,
  },
  dreamText: {
    margin: 10,
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
  },
  likeView: {
    flexDirection: 'row',
  },
  likeImg: {
    marginTop: 25,
    marginLeft: 35,
    tintColor: '#FFFEB2',
  },
  likeText: {
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
  },
})
