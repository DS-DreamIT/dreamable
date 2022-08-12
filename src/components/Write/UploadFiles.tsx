import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const Uploadfiles = props => {
  const [img, setImg] = useState(false)
  const ShowPicker = async () => {
    // launchImageLibrary({mediaType: 'photo'}, res => {
    //   const formdata = new FormData()
    //   formdata.append('file', res.assets && res.assets[0].uri)
    //   console.log(res)
    //   setUpload(true)
    // })
    type imageType = {
      uri: string
      type: string
      name: string
    }
    const image: imageType = {
      uri: '',
      type: '',
      name: '',
    }
    await launchImageLibrary({}, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker')
        setImg(false)
      } else if (res.errorCode) {
        console.log('ImagePicker Error: ', res.errorCode)
        setImg(false)
      } else if (res.assets) {
        //정상적으로 사진을 반환 받았을 때
        console.log('ImagePicker res', res)
        setImg(true)
        image.name = res.assets[0]?.fileName
        image.type = res.assets[0]?.type
        image.uri =
          Platform.OS === 'android'
            ? res.assets[0]?.uri
            : res.assets[0]?.uri?.replace('file://', '')
      }
    })
    props.data.append('Image', image)
  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        try {
          const result = await launchCamera(
            {
              saveToPhotos: true,
              mediaType: 'photo',
              cameraType: 'front',
            },
            // onPickImage,
          )
          console.log(result)
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log('Camera permission denied')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <View style={[styles.align]}>
      <TouchableOpacity onPress={requestCameraPermission}>
        <Image
          style={[styles.icon]}
          source={require('../../assets/icons/upload-camera.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ShowPicker()}>
        <Image
          style={[styles.icon]}
          source={
            img
              ? require('../../assets/icons/upload-gallery-selected.png')
              : require('../../assets/icons/upload-gallery-default.png')
          }
        />
      </TouchableOpacity>
      <Image
        style={[styles.icon]}
        source={require('../../assets/icons/upload-music.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  align: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 22,
  },
  icon: {
    marginHorizontal: 20,
  },
})

export default Uploadfiles
