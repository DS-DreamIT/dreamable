import React, {useRef} from 'react'
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

const title = 'Share your Dreams'
const smallTitle = 'Personal Dream'

// @ts-ignore
//const captureRef = useRef<any | undefined | null>()
export default function ShareDream({navigation}) {
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

  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} />
        <View style={[styles.flex, styles.padding89]}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.sepline} />

          <ViewShot ref={captureRef} options={{format: 'jpg', quality: 1}}>
            <View>
              <View style={styles.bigbox}>
                <Text style={styles.smalltitle}>{smallTitle}</Text>
                <Image
                  style={[styles.image]}
                  source={require('../../assets/icons/cloudy.png')}
                />
                <View style={styles.smallbox} />
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
  padding89: {padding: 25, paddingLeft: 0, paddingRight: 0},
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
  image: {paddingLeft: 0, paddingRight: 0, marginTop: 25, marginLeft: 20},
  smalltitle: {fontSize: 30, marginTop: 21, paddingLeft: 34, color: '#ffffff'},
  smallbox: {
    width: 254,
    height: 150,
    backgroundColor: '#ded9ed',
    opacity: 0.57,
    marginTop: 0,
    marginLeft: 20,
  },
  iconstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {marginLeft: 40},
  back: {marginTop: 30, marginLeft: 20},
})
