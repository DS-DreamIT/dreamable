import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

type PropTypes = {
  keyword: string[]
  emotion: string[]
  text: string
  _onClick: Function
}
const SelectCard = (props: PropTypes) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddceff',
    color: '#234323',
    opacity: 0.7,
    width: 280,
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
})

export default SelectCard
