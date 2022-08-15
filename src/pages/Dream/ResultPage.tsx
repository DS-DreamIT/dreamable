import {format} from 'date-fns'
import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
} from 'react-native'
import TopBar from '../../components/Common/TopBar'
import MoodCard from '../../components/Card/MoodCard'
import Config from 'react-native-config'
import KeywordCard from '../../components/Card/KeywordCard'
import EmotionData from '../../assets/data/EmotionData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Progress from 'react-native-progress'

const title = '당신의 꿈은 어땠을까요?'
const word = '꿈 단어'
const analysis = '꿈 분석'
const story = 'Dream Story'
const analresult = '분석 결과'
const date = format(new Date(), 'yyyy-MM-dd')

// @ts-ignore
export default function ResultPage({navigation, route}) {
  const diaryID = route.params.diaryID
  const date = route.params.day
  const [spinner, setSpinner] = useState(true)
  const [userId, setUserId] = useState('')
  const [diary, setDiary] = useState([])
  const [result, setResult] = useState({})

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      setUserId(JSON.parse(user).id)
    })
  }, [])

  useEffect(() => {
    if (diary.length != 0) {
      const result = EmotionData.find(data => data.kor === diary.emotion[0])
      result ? setResult(result) : setResult({})
    }
    setSpinner(false)
  }, [diary])

  useEffect(() => {
    if (userId) {
      setSpinner(true)
      fetch(`${Config.API_URL}/api/diary/${diaryID}/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            // 유저 다이어리 목록 불러옴
            setDiary(response.diary)
            console.log(diaryID)
          }
        })
    }
  }, [userId])

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TopBar navigation={navigation} type={'BACK'} date={date} />
        {/* Modal 창 */}
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.modalcontainer}>
            <View style={styles.modalBox}>
              {Object.keys(diary).length ? (
                diary.img.length == 0 || diary.img[0] == '' ? (
                  <Text style={styles.modalText}>
                    이미지가 존재하지 않아요.
                  </Text>
                ) : (
                  <Image
                    style={styles.modalImage}
                    source={{
                      uri: diary.img[0],
                    }}
                  />
                )
              ) : (
                <></>
              )}
              <Button
                title="닫기"
                color={'#F1B2B2'}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
        {spinner ? (
          <View style={[styles.spinner]}>
            <Progress.Circle
              size={30}
              indeterminate={true}
              borderColor={'#ffffff'}
            />
          </View>
        ) : (
          <View style={[styles.flex]}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.wordContainer}>
              <View>
                <Text style={styles.text}>{word}</Text>
                <View style={styles.wordBox}>
                  {Object.keys(diary).length ? (
                    diary.keyword.length == 0 ? (
                      <Text style={styles.diaryText}>
                        키워드가 없는 꿈을 꾸었어요.
                      </Text>
                    ) : (
                      //@ts-ignore
                      diary.keyword.map((keywordData, index) => {
                        return <KeywordCard keyword={keywordData} />
                      })
                    )
                  ) : (
                    <></>
                  )}
                </View>
              </View>
              <View>
                <Text style={styles.text}>{analysis}</Text>
                <View style={styles.wordBox}>
                  {Object.keys(diary).length ? (
                    diary.emotion.length == 0 ? (
                      <Text style={styles.diaryText}>
                        감정이 없는 꿈을 꾸었어요.
                      </Text>
                    ) : (
                      //@ts-ignore
                      diary.emotion.map((emotionData, index) => {
                        return <MoodCard type={emotionData} />
                      })
                    )
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.diaryContainer}>
              <View style={styles.wordContainer}>
                <Text style={styles.text}>{story}</Text>
                <TouchableOpacity
                  style={styles.getImageContainer}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.getImageText}>꿈 이미지 보기</Text>
                  <Image
                    style={styles.getImage}
                    source={require('../../assets/icons/upload-gallery-selected.png')}
                  />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.diaryBox}>
                <View style={styles.result}>
                  <Text style={styles.diaryText}>{diary.content}</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.diaryContainer}>
              <Text style={styles.text}>{analresult}</Text>
              <ScrollView style={styles.resultBox}>
                <View style={styles.result}>
                  {Object.keys(diary).length ? (
                    diary.emotion.length == 0 ? (
                      <Text style={styles.diaryText}>
                        감정이 없는 꿈을 꾸었기에 분석 결과가 없어요.
                      </Text>
                    ) : (
                      <Text style={styles.diaryText}>{result.long}</Text>
                    )
                  ) : (
                    <></>
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  result: {
    paddingBottom: 20,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 10,
    fontFamily: 'SCDream3',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  wordBox: {
    display: 'flex',
    flexDirection: 'column',
    height: 105,
    width: 145,
    marginLeft: 35,
    marginTop: 2,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000',
  },
  diaryBox: {
    height: 240,
    width: 325,
    marginLeft: 35,
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  resultBox: {
    height: 82,
    width: 325,
    marginLeft: 35,
    marginTop: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  modalBox: {
    flex: 0.5,
    borderRadius: 5,
    borderColor: '#cccccc',
    backgroundColor: '#ffffffBB',
    padding: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 35,
    fontFamily: 'SCDream4',
  },
  wordContainer: {
    flexDirection: 'row',
  },
  diaryContainer: {
    marginTop: 10,
  },
  getImageContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  modalcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  getImage: {
    width: 18,
    height: 19,
    marginRight: 35,
    marginLeft: 5,
    marginTop: 5,
  },
  getImageText: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'SCDream3',
    color: 'white',
  },
  diaryText: {
    fontSize: 16,
    fontFamily: 'SCDream4',
    color: '#D4CCE8',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SCDream4',
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
})
