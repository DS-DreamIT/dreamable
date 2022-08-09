import {format} from 'date-fns'
import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'

const date = new Date()

// @ts-ignore
const todayFunc = selectedDate => {
  return (
    <View>
      <Text style={styles.today}>DAY {selectedDate} </Text>
    </View>
  )
}

// @ts-ignore
const dataIndex = (selectedDate, getDatas) => {
  const datas = Object.values(getDatas)
  for (let i = 0; i < datas.length; i++) {
    // @ts-ignore
    if (format(new Date(datas[i].createdAt), 'yyyy-MM-dd') == selectedDate) {
      return i
    }
  }
  return -1
}

// @ts-ignore
const PrintDayEmotion = array => {
  let emotions = ''

  for (let i = 0; i < array.length; i++) emotions += array[i] + ' '

  return emotions
}
// @ts-ignore
const registerDate = selectedDate => {
  const createDate = new Date(selectedDate)
  const diff = date.getTime() - createDate.getTime()
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24))

  return diffDay
}

// @ts-ignore
const todayEmotion = (selectedDate, getDatas, navigation) => {
  const index = dataIndex(selectedDate, getDatas)
  let emotions = ''

  if (index != -1) {
    emotions = PrintDayEmotion(getDatas[index].emotion)
  }

  return index == -1 ? (
    <View>
      <Text style={{fontSize: 20, fontFamily: 'SCDream3'}}>
        이 날은 꾼 꿈이 없네요!
      </Text>
    </View>
  ) : registerDate(selectedDate) > 5 ? (
    <View style={styles.flex}>
      {emotions ? (
        <Text style={{fontSize: 20, fontFamily: 'SCDream3'}}>
          이 날은 <Text style={{fontWeight: '700'}}>{emotions}</Text>감정의 꿈을
          꾸셨네요!
        </Text>
      ) : (
        <Text style={{fontSize: 20, fontFamily: 'SCDream3'}}>
          감정이 없는 꿈을 꾸었어요!
        </Text>
      )}
      <TouchableOpacity
        style={[styles.goto]}
        onPress={() => {
          navigation.navigate('ResultPage', {
            screen: 'ResultPage',
            diaryID: getDatas[index]._id,
            day: selectedDate,
          })
        }}>
        <Text style={[styles.gotoText]}>꿈조각 살펴보기</Text>
        <Image source={require('../../assets/icons/arrow-go.png')} />
      </TouchableOpacity>
    </View>
  ) : (
    <View>
      <Text style={{fontSize: 20, fontFamily: 'SCDream3'}}>
        꿈 열어보기까지 D-{5 - registerDate(selectedDate)}
      </Text>
    </View>
  )
}

// @ts-ignore
const DayResult = ({selectedDate, getDatas, navigation}) => {
  return (
    <View style={styles.view}>
      {todayFunc(selectedDate)}
      {todayEmotion(selectedDate, getDatas, navigation)}
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'column',
  },
  today: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'SCDream4',
    marginBottom: 5,
  },
  view: {
    backgroundColor: '#ffffff44',
    width: 'auto',
    height: 150,
    padding: 10,
    borderColor: '#000000',
    margin: 10,
  },
  goto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    marginLeft: 'auto',
  },
  gotoText: {
    fontSize: 20,
    marginRight: 10,
    fontFamily: 'SCDream4',
  },
})

export default DayResult
