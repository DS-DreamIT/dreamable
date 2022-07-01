import React, {useCallback} from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'

// @ts-ignore
const TopBar = ({navigation}) => {
  const goBack = useCallback(() => navigation.pop(), []) // 오류

  return (
    <TouchableOpacity onPress={goBack}>
      <Image
        style={[styles.back]}
        source={require('../../assets/icons/arrow-back.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back: {
    marginTop: 20,
    marginLeft: 13,
  },
})

export default TopBar
