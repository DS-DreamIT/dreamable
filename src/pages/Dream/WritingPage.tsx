import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Currentdate from '../../components/Write/CurrentDate'
import TopBar from '../../components/Common/TopBar'
import Uploadfiles from '../../components/Write/UploadFiles'
import Writing from '../../components/Write/Writing'
import Config from 'react-native-config'
import * as Progress from 'react-native-progress'

// @ts-ignore
export default function WritingPage({navigation}) {
  let data = new FormData()
  const [content, setContent] = useState('')
  const [diary, setDiary] = useState([])
  const [spinner, setSpinner] = useState(false)

  const handleClick = () => {
    if (content.length > 8) {
      data.append('content', content)
    } else {
      Alert.alert('Warning', '충분한 분석을 위해 30글자 이상 입력해주세요.')
    }
    setSpinner(true)
    fetch(`${Config.TEMP_API_URL}/api/diary/user/62df4bc8f1ff31b19db9ace9`, {
      method: 'POST',
      headers: {},
      body: data,
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          console.log(response.diary)
          navigation.navigate('SelectPage', {
            screen: 'SelectPage',
            diary: response.diary,
          })
          setSpinner(false)
        }
      })
  }

  return (
    <View style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} />
        <Currentdate />
        <Writing content={content} setContent={setContent} />
        <Uploadfiles data={data} />
        <View style={[styles.line]} />
        {spinner ? (
          <View style={[styles.spinner]}>
            <Progress.Circle
              size={30}
              indeterminate={true}
              borderColor={'#ffffff'}
            />
          </View>
        ) : (
          <TouchableOpacity onPress={() => handleClick()}>
            <Text style={[styles.writingText]}>
              선물상자에 {'\n'}나의 꿈 담기
            </Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    borderColor: '#DDCEFF',
    width: 187,
    marginHorizontal: 101,
    marginBottom: 19,
  },
  flex: {
    flex: 1,
  },
  view: {
    backgroundColor: '#DDCEFF',
    marginHorizontal: 38,
    opacity: 0.7,
    height: 397,
    borderRadius: 4,
    marginTop: 13,
  },
  writingText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
