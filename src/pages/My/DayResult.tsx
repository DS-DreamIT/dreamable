import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import data from './data.json'

const date = new Date()

const getDates = Object.entries(data).map((entrie, idx) => {
  return entrie[1].date
})

// @ts-ignore
const todayFunc = selectedDate => {
  return (
    <View>
      <Text style={styles.today}>Day {selectedDate} </Text>
    </View>
  )
}

// @ts-ignore
const dataIndex = selectedDate => {
  const datas = Object.values(data)
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].date == selectedDate) {
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
const todayEmotion = selectedDate => {
  const index = dataIndex(selectedDate)
  const datas = Object.values(data)
  let emotions = ''

  if (index != -1) {
    emotions = PrintDayEmotion(datas[index].emotion)
  }

  return index == -1 ? (
    <View>
      <Text style={{fontSize: 20}}>이 날은 꾼 꿈이 없네요!</Text>
    </View>
  ) : registerDate(selectedDate) > 5 ? (
    <View>
      <Text style={{fontSize: 20}}>
        이 날은 <Text style={{fontWeight: '700'}}>{emotions}</Text>감정의 꿈을
        꾸셨네요!
      </Text>
      <TouchableOpacity style={[styles.goto]}>
        <Text style={[styles.gotoText]}>꿈조각 살펴보기</Text>
        <Image source={require('../../assets/icons/arrow-go.png')} />
      </TouchableOpacity>
    </View>
  ) : (
    <View>
      <Text style={{fontSize: 20}}>
        꿈 열어보기까지 D-{5 - registerDate(selectedDate)}
      </Text>
    </View>
  )
}

// @ts-ignore
const DayResult = ({selectedDate}) => {
  return (
    <View style={styles.view}>
      {todayFunc(selectedDate)}
      {todayEmotion(selectedDate)}
    </View>
  )
}

const styles = StyleSheet.create({
  today: {
    fontSize: 20,
    color: '#ffffff',
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
  },
  gotoText: {
    fontSize: 20,
    marginRight: 10,
  },
})

export default DayResult
