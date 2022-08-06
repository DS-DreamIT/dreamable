import React, {useContext} from 'react'
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

// @ts-ignore
export default function MyProfilePage({}) {
  const {signOut} = useContext(AuthContext)

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
          <Image
            source={require('../../assets/icons/profilePhoto.png')}
            style={styles.profileImg}
          />
          <Text style={styles.nickname}>Nickname</Text>
          <Text style={styles.email}>email@gmail.com</Text>
          <Text style={styles.dreamDay}>꿈 꾼 날 12일</Text>
        </View>
        <View style={styles.calendarBoxView}>
          <TouchableOpacity
            onPress={() => Alert.alert('message', '선물상자 캘린더')}
            style={styles.touchBox}>
            <Image
              source={require('../../assets/icons/box.png')}
              style={styles.calendarBoxImg}
            />
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
            onPress={() => Alert.alert('message', '감정 뱃지')}
            style={styles.touchBox}>
            <Image
              source={require('../../assets/icons/box.png')}
              style={styles.calendarBoxImg}
            />
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
        <View style={styles.statisticsView}>
          <Image
            source={require('../../assets/icons/graph.png')}
            style={styles.statisticsImg}
          />
          <Text style={styles.keywordText}>키워드 통계</Text>
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
    marginRight: 95,
  },
  logOut: {
    marginTop: 16,
    marginRight: 12,
    fontSize: 18,
    color: '#FFFFFF',
  },
  lineImg: {
    width: '100%',
    height: '0.3%',
    marginTop: 8,
  },
  profile: {
    alignItems: 'center',
  },
  profileImg: {
    marginTop: 20,
  },
  nickname: {
    color: '#FFFFFF',
    fontSize: 30,
    marginTop: 5,
  },
  email: {
    color: '#DDDDDD',
  },
  dreamDay: {
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 20,
  },
  touchBox: {
    alignSelf: 'center',
  },
  calendarBoxView: {
    alignItems: 'flex-start',
  },
  calendarBoxImg: {
    marginTop: 30,
    alignSelf: 'center',
    position: 'absolute',
  },
  giftImg: {
    marginTop: 46,
    position: 'absolute',
  },
  boxText: {
    fontSize: 24,
    color: '#000000',
    marginLeft: 35,
    marginTop: 40,
    position: 'absolute',
  },
  arrowImg: {
    marginTop: 48,
    marginLeft: 270,
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
    marginTop: 44,
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
  },
})
