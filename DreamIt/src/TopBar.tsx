import {useNavigation} from '@react-navigation/native'
import React, {useCallback} from 'react'
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native'

const TopBar = () => {
  const navigation = useNavigation()
  const goBack = useCallback(() => navigation.navigate('home'), []) // 오류

  return (
    <TouchableOpacity onPress={goBack}>
      <Image
        style={[styles.back]}
        source={require('./assets/images/backstack.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  back: {
    marginTop: 27,
    marginLeft: 26,
  },
})

export default TopBar
