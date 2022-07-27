import React, {useState} from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import TopBar from '../../components/Common/TopBar'

// @ts-ignore
export default function OthersDiaryPage({navigation, route}) {
  const [heart, setHeart] = useState(false)
  const [like, setLike] = useState(0)

  const clickLike = () => {
    setHeart(false)
    setLike(prev => prev - 1)
  }

  const unClickLike = () => {
    setHeart(true)
    setLike(prev => prev + 1)
  }

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background-others.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} />
        <Text style={styles.moodText}>#{route.params.mood}</Text>
        <View style={styles.dreamBox}>
          <Text style={styles.dreamText}>히히</Text>
        </View>
        <View style={styles.likeView}>
          <TouchableOpacity
            onPress={() => {
              heart ? clickLike() : unClickLike()
            }}
            style={styles.likeImg}>
            <Image
              source={
                heart
                  ? require('../../assets/icons/heart-selected.png')
                  : require('../../assets/icons/heart-default.png')
              }
            />
          </TouchableOpacity>
          <Text style={styles.likeText}>{like}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  moodText: {
    color: '#FFFFFF',
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  dreamBox: {
    backgroundColor: '#D4CCE8',
    alignSelf: 'center',
    width: '85%',
    height: '63%',
    marginTop: 20,
    borderRadius: 5,
    opacity: 0.8,
  },
  dreamText: {
    margin: 10,
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
  },
  likeView: {
    flexDirection: 'row',
  },
  likeImg: {
    marginTop: 25,
    marginLeft: 35,
    tintColor: '#FFFEB2',
  },
  likeText: {
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
  },
})
