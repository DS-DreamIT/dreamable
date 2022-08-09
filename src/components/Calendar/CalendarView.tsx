import {format} from 'date-fns'
import React, {useState, useCallback, useMemo} from 'react'
import {View, StyleSheet} from 'react-native'
import {Calendar} from 'react-native-calendars'
import DayResult from '../../pages/My/DayResult'

const date = new Date()
const maxdate = format(date, 'yyyy-MM-dd')

// @ts-ignore
const CalendarView = ({markedDates, selectedDate, getDatas, navigation}) => {
  const [selected, setSelected] = useState(format(date, 'yyyy-MM-dd'))
  // @ts-ignore
  const onDayPress = useCallback(day => {
    setSelected(day.dateString)
  }, [])

  const marked = useMemo(() => {
    return {
      // @ts-ignore
      ...markedDates,
      [selected]: {
        selectedColor: '#E1CAFF',
        selected: true,
        marked: markedDates[selectedDate]?.marked,
        disableTouchEvent: true,
        customStyles: {
          container: {
            borderColor: '#E1CAFF',
            borderWidth: 3,
          },
          text: {
            marginTop: 1,
          },
        },
      },
    }
  }, [selected])

  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        <Calendar
          markingType={'multi-dot'}
          markedDates={marked}
          maxDate={maxdate}
          style={styles.layout}
          theme={{
            calendarBackground: '#ffffff00',
            textSectionTitleColor: '#ffffff',
            dayTextColor: '#ffffff',
            todayTextColor: '#9C8CCA',
            selectedDotColor: '#ffffff',
            textDisabledColor: '#ffffff41',
            arrowColor: 'white',
            monthTextColor: 'white',
            indicatorColor: 'white',
            textMonthFontFamily: 'SCDream6',
            textDayFontFamily: 'SCDream3',
            textDayHeaderFontFamily: 'SCDream4',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14,
          }}
          headerStyle={styles.customHeader}
          onDayPress={onDayPress}
          monthFormat={'yyyy MMMM'}
          onMonthChange={month => {
            console.log('month changed', month)
          }}
          hideExtraDays={true}
          disableMonthChange={true}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
        />
        <View style={styles.resultView}>
          <DayResult
            selectedDate={selected.toString()}
            getDatas={getDatas}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 35,
    marginTop: 75,
    marginBottom: 50,
  },
  calendar: {
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16,
  },
  customHeader: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: -20,
    padding: 5,
  },
  flex: {
    flex: 1,
    flexDirection: 'column',
  },
  resultView: {
    justifyContent: 'flex-start',
    marginTop: 'auto',
    marginBottom: 10,
  },
})

export default CalendarView
