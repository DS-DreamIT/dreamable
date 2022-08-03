import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const Uploadfiles = () => {
  const [upload, setUpload] = useState(false)

  const ShowPicker = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      const formdata = new FormData()
      formdata.append('file', res.assets && res.assets[0].uri)
      console.log(res)
      setUpload(true)
    })
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
            upload
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
