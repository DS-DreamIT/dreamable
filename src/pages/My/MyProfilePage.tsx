import React, {useContext, useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {AuthContext} from '../../components/Login/context'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage'

// @ts-ignore
export default function MyProfilePage({navigation}) {
  const {signOut} = useContext(AuthContext)
  const [userId, setUserId] = useState('')
  const [user, setUser] = useState([])
  const [count, setCount] = useState(0)

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
          if (response.success) {
            // 유저 정보 불러옴
            setUser(response.user)
          }
        })
      fetch(`${Config.API_URL}/api/user/${userId}/totalDiaryCount`)
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            console.log(response.diary_count)
            setCount(response.diary_count)
          }
        })
    }
  }, [userId])

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Profile</Text>
          <TouchableOpacity onPress={() => signOut()}>
            <Text style={styles.logOut}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/icons/line.png')}
          style={styles.lineImg}
        />
        <View style={styles.profile}>
          {count <= 5 ? (
            <Image
              source={require('../../assets/images/moon-until-5.png')}
              style={styles.profileImg}
            />
          ) : count <= 10 ? (
            <Image
              source={require('../../assets/images/moon-until-10.png')}
              style={styles.profileImg}
            />
          ) : count <= 15 ? (
            <Image
              source={require('../../assets/images/moon-until-15.png')}
              style={styles.profileImg}
            />
          ) : count <= 20 ? (
            <Image
              source={require('../../assets/images/moon-until-20.png')}
              style={styles.profileImg}
            />
          ) : (
            <Image
              source={require('../../assets/images/moon-until-25.png')}
              style={styles.profileImg}
            />
          )}

          <Text style={styles.nickname}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.dreamDay}>꿈 꾼 날 {count}일</Text>
        </View>
        <View style={styles.calendarBoxView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CalendarPage')}
            style={styles.touchBox}>
            <Image
              source={require('../../assets/icons/gift.png')}
              style={styles.giftImg}
            />
            <Text style={styles.boxText}>선물상자 캘린더</Text>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={styles.arrowImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.moodBadgeView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BadgePage')}
            style={styles.touchBox}>
            <Image
              source={require('../../assets/icons/badge.png')}
              style={styles.badgeImg}
            />
            <Text style={styles.boxText}>감정 뱃지</Text>
            <Image
              source={require('../../assets/icons/arrow.png')}
              style={styles.arrowImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.coconutContent}>
          <Image
            source={require('../../assets/images/coconut.png')}
            style={styles.coconut}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  coconut: {
    width: 120,
    height: 100,
  },
  coconutContent: {
    alignItems: 'center',
    marginTop: 30,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 8,
    marginRight: 79,
    fontFamily: 'SCDream4',
  },
  logOut: {
    marginTop: 16,
    marginRight: 12,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'SCDream3',
  },
  lineImg: {
    width: '100%',
    height: '0.3%',
    marginTop: 8,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 24,
  },
  profileImg: {
    marginTop: 20,
  },
  nickname: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'SCDream3',
  },
  email: {
    color: '#DDDDDD',
    fontFamily: 'SCDream3',
  },
  dreamDay: {
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 20,
    fontFamily: 'SCDream4',
  },
  touchBox: {
    alignSelf: 'center',
    backgroundColor: '#ffffff66',
    borderRadius: 15,
    height: 60,
    width: 324,
  },
  calendarBoxView: {
    alignItems: 'flex-start',
    marginBottom: 11,
  },
  calendarBoxImg: {
    alignSelf: 'center',
    position: 'absolute',
  },
  giftImg: {
    marginTop: 20,
    marginLeft: 16,
    position: 'absolute',
  },
  boxText: {
    fontSize: 24,
    color: '#000000',
    marginLeft: 48,
    marginTop: 14,
    position: 'absolute',
    fontFamily: 'SCDream4',
  },
  arrowImg: {
    marginTop: 20,
    marginLeft: 282,
  },
  moodBadgeView: {
    alignItems: 'flex-start',
  },
  moodBadgeImg: {
    marginTop: 100,
    alignSelf: 'center',
    position: 'absolute',
  },
  badgeImg: {
    marginTop: 17,
    marginLeft: 16,
    position: 'absolute',
  },
  statisticsView: {
    flexDirection: 'row',
  },
  statisticsImg: {
    marginTop: 45,
    marginLeft: 50,
    width: 26,
    height: 26,
  },
  keywordText: {
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: 43,
    marginLeft: 10,
    fontFamily: 'SCDream4',
  },
})
