import React, {useCallback} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'

// @ts-ignore
const TopBar = ({navigation, date}) => {
  const goBack = useCallback(() => navigation.pop(), []) // 오류

  return (
    <TouchableOpacity onPress={goBack}>
      <View style={styles.view}>
        <Image source={require('../../assets/icons/arrow-back.png')} />
        <Text style={styles.text}>{date}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    marginLeft: 13,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
})

TopBar.defaultProps = {
  date: '',
}

export default TopBar
