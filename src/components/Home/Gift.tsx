import React from 'react'
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'

// @ts-ignore
const Gift = ({color, date, navigation}) => {
  return (
    <View style={[styles.view]}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Result', {screen: 'Result'})
        }}>
        <Image
          style={[styles.gift, {tintColor: color}]}
          source={require('../../assets/images/gift.png')}
        />
      </TouchableOpacity>
      <View style={[styles.label]}>
        <Text style={[styles.text]}>{date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {},
  gift: {
    marginHorizontal: 20,
  },
  label: {
    position: 'absolute',
    borderRadius: 5,
    marginHorizontal: 28,
    width: 63,
    height: 25,
    marginTop: 78,
    backgroundColor: '#ffffff',
  },
  text: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'RobotoLightItalic',
  },
})

export default Gift
