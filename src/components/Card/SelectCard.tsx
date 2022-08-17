import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

// @ts-ignore
export default function SelectCard({navigation, keyword, emotion, text, move}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate(`${move}`, {emotion: emotion, keyword: keyword})
          }>
          {text}
        </Text>
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
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'SCDream5',
  },
})

export default SelectCard
