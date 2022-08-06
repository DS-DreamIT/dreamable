import React from 'react'
import {Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native'

type propTypes = {
  selected: boolean
  setSelected: Function
}
const ReleaseCheckBox = (props: propTypes) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>꿈 공유하기</Text>
      <TouchableOpacity
        onPress={() => {
          props.selected ? props.setSelected(false) : props.setSelected(true)
        }}>
        <View>
          <Image
            source={
              props.selected
                ? require('../../assets/icons/check-selected.png')
                : require('../../assets/icons/check-default.png')
            }
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 40,
  },
  text: {
    color: '#fff',
    marginRight: 8,
    fontSize: 14,
  },
})

export default ReleaseCheckBox
