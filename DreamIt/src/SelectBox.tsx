import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const SelectBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>키워드가 비슷한 다른 이들의 꿈을 볼래요</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddceff',
    color: '#000000',
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

export default SelectBox
