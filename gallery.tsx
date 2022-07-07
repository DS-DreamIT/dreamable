//방법 1
import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

import {launchImageLibrary} from 'react-native-image-picker'

/* option 사용법
launchCamera({saveToPhotos:true}, response=>{
  this.setState({
    avatar: response.uri
  })
})
*/

const ShowPicker = () => {
  //launchImageLibrary : 사용자 앨범 접근
  launchImageLibrary({}, res => {
    const formdata = new FormData()
    formdata.append('file', res.assets[0].uri)
    console.log(res)
  })
}

export default function Community() {
  return (
    <View style={{flex: 1, padding: 16}}>
      <Button title="show picker" onPress={ShowPicker}></Button>
      <View style={styles.view}>
        <Text>카테고리</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#DDE4CE',
    border: 'solid',
  },
})

// 방법 2

// import React, {useState} from 'react'
// import {View, Image, Platform, Button} from 'react-native'
// import {launchImageLibrary} from 'react-native-image-picker'

// export default function ImageUploadSample() {
//   const [response, setResponse] = useState(null)
//   const onSelectImage = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         maxWidth: 512,
//         maxHeight: 512,
//         includeBase64: Platform.OS === 'android',
//       },
//       res => {
//         console.log(res)
//         if (res.didCancel) return
//         setResponse(res)
//       },
//     )
//   }

//   return (
//     <View>
//       <Button title="갤러리" onPress={onSelectImage}></Button>
//       <Image source={{uri: 'uri'}} />
//     </View>
//   )
// }

// 방법 3

// import React, {Component} from 'react'
// import {View, Text, Image, Button} from 'react-native'

// import * as ImagePicker from 'react-native-image-picker'

// export default class Main extends Component {
//   constructor() {
//     super()
//     this.state = {
//       img: {uri: 'https://pbs.twimg.com/media/EGR6H_dXkAE9Pu8.jpg'},
//     }
//   }

//   render() {
//     return (
//       <View style={{flex: 1, padding: 16}}>
//         <Button title="show Picker" onPress={this.showPicker}></Button>
//         <Text style={{margin: 8}}> {this.state.img.uri}</Text>
//         <Image source={this.state.img} style={{marginTop: 8, flex: 1}}></Image>
//       </View>
//     )
//   }

//   showPicker = () => {
//     // 카메라를 다루려면 Camera, External Storage 퍼미션이 필요함
//     // Android의 경우 퍼미션을 주려면 .. AndroidManifest.xml에서 직접 작성
//     // <uses-permission android:name="android.permission.CAMERA" />
//     // <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

//     // PickerDialog의 옵션 객체
//     const options = {
//       // storageOptions: {
//       //   skipBackup: true, //ios에서 icloud에 백업할 것인가?- 안드로이드에서는 무시됨
//       //   path: 'images', //카메라로 캡쳐시에 저장될 폴더명 [ Pictures/[path] 경로]
//       // },
//     }

//     //위에서 만든 옵션을 기준으로 다이얼로그 보이기
//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         alert('사용자가 취소하였습니다.')
//       } else if (response.error) {
//         alert('에러 : ', response.error)
//       } else if (response.customButton) {
//         alert('커스텀버튼 선택 :' + response.customButton)
//       } else {
//         // 이곳에 왔다면 이미지가 잘 선택된 것임
//         // 선택된 이미지의 경로 uri 얻어오기
//         const uri = {uri: response.uri}
//         this.setState({img: uri})
//       }
//     })
//   }
// }
