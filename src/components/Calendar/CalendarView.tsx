import {format} from 'date-fns'
import React, {useState, useCallback, useMemo} from 'react'
import {View, StyleSheet} from 'react-native'
import {Calendar} from 'react-native-calendars'
import DayResult from '../../pages/My/DayResult'

const date = new Date()

// @ts-ignore
const CalendarView = ({markedDates, selectedDate, onSelectDate}) => {
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
      <View>
        <Calendar
          markingType={'multi-dot'}
          markedDates={marked}
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
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          onDayPress={onDayPress}
          onDayLongPress={day => {
            console.log('selected day', day)
          }}
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
        <DayResult selectedDate={selected.toString()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 35,
    marginTop: 65,
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
  disabledText: {
    color: 'grey',
  },
  defaultText: {
    color: 'purple',
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  customDay: {
    textAlign: 'center',
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BBF2',
  },

  flex: {
    flex: 1,
  },
})

export default CalendarView
