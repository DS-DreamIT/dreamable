import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import Config from 'react-native-config'
import Keyword from '../../components/Home/Keyword'
import AsyncStorage from '@react-native-async-storage/async-storage'
import GiftList from '../../components/Home/GiftList'

// @ts-ignore
export default function HomePage({navigation}) {
  const [userId, setUserId] = useState('')
  const [name, setName] = useState('')
  const [diaries1, setDiaries1] = useState([])
  const [diaries2, setDiaries2] = useState([])
  const [keywords, setKeywords] = useState([])
  //@ts-ignore
  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      setUserId(JSON.parse(user).id)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetch(`${Config.API_URL}/api/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(response => {
          let temp1 = []
          let temp2 = []
          //@ts-ignore
          response.diary_list.forEach((entrie, idx) => {
            if (idx < 3) {
              temp1.push(entrie)
            } else {
              temp2.push(entrie)
            }
          })
          setName(response.user.name)
          setKeywords(response.user.keywords)
          setDiaries1(temp1)
          setDiaries2(temp2)
        })
    }
  }, [userId])

  return (
    <View style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WritingPage', {screen: 'WritingPage'})
          }}>
          <Image
            style={[styles.icon]}
            source={require('../../assets/icons/writing.png')}
          />
        </TouchableOpacity>
        <View style={[styles.text]}>
          {keywords.length > 0 && <Keyword name={name} keywords={keywords} />}
          <Text style={[styles.sentence]}>
            잠은 최고의 명상 {'\n'}- 달라이 라마
          </Text>
        </View>
        <View style={[styles.view]}>
          <View style={[styles.exhibit]}>
            <View style={[styles.table]} />
            <View style={[styles.gifts]}>
              {Object.entries(diaries1).length > 0 && (
                <GiftList data={diaries1} navigation={navigation} />
              )}
            </View>
          </View>
        </View>
        <View style={[styles.view]}>
          <View style={[styles.exhibit, {margin: 50}]}>
            <View style={[styles.table]} />
            <View style={[styles.gifts]}>
              {Object.entries(diaries2).length > 0 && (
                <GiftList data={diaries2} navigation={navigation} />
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  gifts: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  exhibit: {
    width: '100%',
    marginTop: 47,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentence: {
    textAlign: 'center',
    marginHorizontal: 108,
    fontSize: 24,
    margin: -30,
    color: '#ffffff',
    fontFamily: 'SCDream3',
  },
  icon: {
    marginLeft: 330,
    marginTop: 27,
  },
  table: {
    position: 'absolute',
    opacity: 0.75,
    borderBottomWidth: 33,
    borderColor: '#6D250E',
    width: '100%',
    marginTop: 85,
  },
})
