import React, {useCallback} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'

// @ts-ignore
const TopBar = ({navigation, type, date}) => {
  const goBack = useCallback(() => navigation.pop(), [])
  const goHome = useCallback(() => navigation.navigate('Home'), [])

  return (
    <>
      {type === 'HOME' ? (
        <View style={styles.view}>
          <TouchableOpacity onPress={goHome} style={styles.touchable}>
            <Image source={require('../../assets/icons/arrow-back.png')} />
            <Text style={styles.text}>{date}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.view}>
          <TouchableOpacity onPress={goBack} style={styles.touchable}>
            <Image source={require('../../assets/icons/arrow-back.png')} />
            <Text style={styles.text}>{date}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
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
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
  },
})

TopBar.defaultProps = {
  date: '',
}

export default TopBar
