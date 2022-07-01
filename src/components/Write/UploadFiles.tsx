import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

const Uploadfiles = () => {
  return (
    <View style={[styles.align]}>
      <Image
        style={[styles.icon]}
        source={require('../../assets/icons/upload-camera.png')}
      />
      <Image
        style={[styles.icon]}
        source={require('../../assets/icons/upload-gallery.png')}
      />
      <Image
        style={[styles.icon]}
        source={require('../../assets/icons/upload-music.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  align: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 22,
  },
  icon: {
    marginHorizontal: 20,
  },
})

export default Uploadfiles
