import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

// @ts-ignore
export default function MyPage({navigation}) {
  return (
    <View style={styles.view}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('WritingPage', {screen: 'WritingPage'})
        }}>
        <Text>writing page</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('AdvicePage', {screen: 'AdvicePage'})
        }}>
        <Text>advice page</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('ShareDream', {screen: 'ShareDream'})
        }}>
        <Text>ShareDream</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('TravelPage', {screen: 'TravelPage'})
        }}>
        <Text>travel page</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('SelectPage', {screen: 'SelectPage'})
        }}>
        <Text>select page</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('MyProfilePage', {screen: 'MyProfilePage'})
        }}>
        <Text>profile page</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('LoginPage', {screen: 'LoginPage'})
        }}>
        <Text>login page</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          navigation.navigate('RegisterPage', {screen: 'RegisterPage'})
        }}>
        <Text>register page</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#000000',
  },
  button: {
    marginBottom: 20,
    borderRadius: 2,
    borderColor: '#000000',
    color: '#000000',
    backgroundColor: 'yellow',
  },
})
