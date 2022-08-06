import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import Gift from '../../components/Home/Gift'
import Keyword from '../../components/Home/Keyword'

// @ts-ignore
export default function HomePage({navigation}) {
  return (
    <View style={styles.flex}>
      <ImageBackground
        style={[styles.flex]}
        source={require('../../assets/images/background.png')}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WritingPage', {screen: 'WritingPage'})
          }}>
          <Image
            style={[styles.icon]}
            source={require('../../assets/icons/writing.png')}
          />
        </TouchableOpacity>
        <View style={[styles.text]}>
          <Keyword name="꾸미" />
          <Text style={[styles.sentence]}>
            잠은 최고의 명상 {'\n'}- 달라이 라마
          </Text>
        </View>
        <View style={[styles.view]}>
          <View style={[styles.exhibit]}>
            <View style={[styles.table]} />
            <View style={[styles.gifts]}>
              <Gift color={'#E03333'} date="12/20" navigation={navigation} />
              <Gift color={'#FFD233'} date="01/18" navigation={navigation} />
              <Gift color={'#F8A5CF'} date="01/27" navigation={navigation} />
            </View>
          </View>
        </View>
        <View style={[styles.view]}>
          <View style={[styles.exhibit, {margin: 50}]}>
            <View style={[styles.table]} />
            <View style={[styles.gifts]}>
              <Gift color={'#5E9BE2'} date="02/02" navigation={navigation} />
              <Gift color={'#000470'} date="02/08" navigation={navigation} />
              <Gift color={'#000000'} date="02/14" navigation={navigation} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  gifts: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  exhibit: {
    width: '100%',
    marginTop: 47,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentence: {
    textAlign: 'center',
    marginHorizontal: 108,
    fontSize: 24,
    margin: -30,
    color: '#ffffff',
    fontFamily: 'SCDream3',
  },
  icon: {
    marginLeft: 330,
    marginTop: 27,
  },
  table: {
    position: 'absolute',
    opacity: 0.75,
    borderBottomWidth: 33,
    borderColor: '#6D250E',
    width: '100%',
    marginTop: 85,
  },
})
