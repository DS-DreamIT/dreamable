import React, {useEffect, useRef, useState} from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  TouchableHighlight,
} from 'react-native'
import TopBar from '../../components/Common/TopBar'
import Share from 'react-native-share'
import ViewShot from 'react-native-view-shot'
import CameraRoll from '@react-native-community/cameraroll'
import EmotionData from '../../assets/data/EmotionData'
import AsyncStorage from '@react-native-async-storage/async-storage'

const title = 'Share your Dreams'
const smallTitle = 'Personal Dream'

// @ts-ignore
//const captureRef = useRef<any | undefined | null>()
export default function ShareDream({navigation, route}) {
  const captureRef = useRef(null)
  const getPhotoUri = async (): Promise<string> => {
    // @ts-ignore
    const uri = await captureRef.current.capture()
    console.log('Image saved to', uri)
    return uri
  }

  // @ts-ignore
  const onCapture = async (social: Share.social) => {
    try {
      const uri = await getPhotoUri()

      const options = {
        title: 'Share Title',
        message: 'Share Message',
        url: uri,
        type: 'image/jpeg',
      }

      if (social === null) {
        const result = await Share.open(options)
        console.log('result with no social', result)
      } else {
        const result = await Share.shareSingle({
          ...options,
          social,
        })
        console.log(`result with social ${social}`, result)
      }
    } catch (e) {
      console.log('화면 캡쳐 failed', e)
    }
  }

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

    const hasPermission = await PermissionsAndroid.check(permission)
    if (hasPermission) {
      return true
    }

    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  const onSave = async () => {
    console.log('here?')
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return
    }

    const uri = await getPhotoUri()
    const result = await CameraRoll.save(uri)
    console.log('result', result)
  }

  const [nickname, setNickname] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('nickname').then(nickname => {
      const name = JSON.stringify(nickname)
      setNickname(name.replace(/"/g, ''))
    })
  }, [nickname])

  const advice = () => {
    const emotion = route.params.emotion[0]
    if (emotion === '놀람') {
      return EmotionData[0].short
    }
    if (emotion === '설렘') {
      return EmotionData[1].short
    }
    if (emotion === '행복') {
      return EmotionData[2].short
    }
    if (emotion === '중립') {
      return EmotionData[3].short
    }
    if (emotion === '슬픔') {
      return EmotionData[4].short
    }
    if (emotion === '공포') {
      return EmotionData[5].short
    }
    if (emotion === '분노') {
      return EmotionData[6].short
    }
    if (emotion === '불안') {
      return EmotionData[7].short
    }
  }

  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} type={'HOME'} />
        <View style={[styles.flex, styles.padding89]}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.sepline} />

          <ViewShot ref={captureRef} options={{format: 'jpg', quality: 1}}>
            <View>
              <View style={styles.bigbox}>
                <Text style={styles.smalltitle}>{smallTitle}</Text>
                <View>
                  <Image
                    style={[styles.image]}
                    source={require('../../assets/icons/cloudy.png')}
                  />
                  {route.params.emotion.length === 0 ||
                  route.params.emotion.length === undefined ? (
                    <></>
                  ) : (
                    <></>
                  )}
                  {route.params.emotion.length === 1 ? (
                    <Text style={styles.oneMoodText}>
                      #{route.params.emotion[0]}
                    </Text>
                  ) : (
                    <></>
                  )}
                  {route.params.emotion.length === 2 ? (
                    <>
                      <Text style={styles.twoFirstMoodText}>
                        #{route.params.emotion[0]}
                      </Text>
                      <Text style={styles.twoSecondMoodText}>
                        #{route.params?.emotion[1]}
                      </Text>
                    </>
                  ) : (
                    <></>
                  )}
                  {route.params.emotion.length === 3 ? (
                    <>
                      <Text style={styles.threeFirstMoodText}>
                        #{route.params.emotion[0]}
                      </Text>
                      <Text style={styles.threeSecondMoodText}>
                        #{route.params?.emotion[1]}
                      </Text>
                      <Text style={styles.threeThirdMoodText}>
                        #{route.params?.emotion[2]}
                      </Text>
                    </>
                  ) : (
                    <></>
                  )}
                </View>
                <View style={styles.smallbox}>
                  <Text style={styles.smallBoxText}>
                    오늘 {nickname}님의 꿈에서는{' '}
                    {route.params?.emotion.map(emotion => (
                      <Text style={styles.smallBoxText}>'{emotion}' </Text>
                    ))}
                    의 감정이 느껴져요.{' '}
                    {route.params?.keyword.map(keyword => (
                      <Text style={styles.keywordText}>'{keyword}' </Text>
                    ))}
                    에 관한 꿈을 꾸셨네요. {advice()}
                  </Text>
                </View>
              </View>
            </View>
          </ViewShot>

          <View style={styles.sepunderline} />
          <View style={styles.iconstyle}>
            <TouchableHighlight
              onPress={() => onCapture(Share.Social.FACEBOOK)}>
              <Image
                source={require('../../assets/icons/share-facebook.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => onCapture(Share.Social.INSTAGRAM)}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/share-instagram.png')}
              />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => onSave()}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/share-save.png')}
              />
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  text: {
    textAlign: 'center',
    fontSize: 40,
    color: '#ce93d8',
    marginBottom: 10,
    fontFamily: 'RobotoLightItalic',
  },
  padding89: {padding: 10, paddingLeft: 0, paddingRight: 0},
  sepline: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 154,
    marginLeft: 235,
  },
  sepunderline: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 154,
    marginTop: 27,
  },
  bigbox: {
    height: 400,
    width: 294,
    backgroundColor: '#ddceff',
    marginLeft: 50,
    marginTop: 27,
    opacity: 0.65,
  },
  image: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 25,
    marginLeft: 20,
    position: 'absolute',
  },
  smalltitle: {fontSize: 30, marginTop: 21, paddingLeft: 34, color: '#ffffff'},
  smallbox: {
    width: 254,
    height: 150,
    backgroundColor: '#ded9ed',
    marginTop: 235,
    marginLeft: 20,
    position: 'absolute',
  },
  smallBoxText: {
    margin: 5,
    color: '#000000',
    fontSize: 16,
    fontFamily: 'SCDream4',
    lineHeight: 20,
  },
  keywordText: {
    margin: 5,
    color: '#000000',
    fontSize: 16,
    fontFamily: 'SCDream5-Regular',
    lineHeight: 20,
  },
  iconstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {marginLeft: 40},
  back: {marginTop: 30, marginLeft: 20},
  oneMoodText: {
    alignSelf: 'center',
    marginTop: 73,
    fontSize: 24,
    fontFamily: 'SCDream5-Regular',
    color: '#000470',
  },
  twoFirstMoodText: {
    marginTop: 58,
    marginLeft: 155,
    fontSize: 24,
    fontFamily: 'SCDream5-Regular',
    color: '#665AA6',
  },
  twoSecondMoodText: {
    marginTop: 5,
    marginLeft: 80,
    fontSize: 24,
    fontFamily: 'SCDream5-Regular',
    color: '#4D5C92',
  },
  threeFirstMoodText: {
    marginTop: 50,
    marginLeft: 165,
    fontSize: 20,
    fontFamily: 'SCDream5-Regular',
    color: '#665AA6',
  },
  threeSecondMoodText: {
    marginLeft: 70,
    fontSize: 20,
    fontFamily: 'SCDream5-Regular',
    color: '#4D5C92',
  },
  threeThirdMoodText: {
    marginLeft: 145,
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'SCDream5-Regular',
    color: '#000470',
  },
})
