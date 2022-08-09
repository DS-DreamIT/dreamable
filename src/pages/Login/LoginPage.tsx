import React, {useContext, useState} from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {AuthContext} from '../../components/Login/context'

// @ts-ignore
export default function LoginPage({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPw] = useState('')

  const inputEmail = (newText: React.SetStateAction<string>) => {
    setEmail(newText)
  }

  const inputPw = (newText: React.SetStateAction<string>) => {
    setPw(newText)
  }

  const {signIn} = useContext(AuthContext)

  const loginHandle = (email, password) => {
    signIn(email, password)
  }

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/icons/login-background.png')}
        style={styles.bgImage}>
        <Image
          source={require('../../assets/icons/moon-cloud.png')}
          style={styles.iconImg}
        />
        <Text style={styles.titleText}>Dreamable</Text>
        <View style={styles.emailView}>
          <Text style={styles.text}>EMAIL</Text>
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={inputEmail}
              value={email}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.passwordView}>
          <Text style={styles.text}>PASSWORD</Text>
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={inputPw}
              value={password}
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.loginView}
          onPress={() => loginHandle(email, password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('RegisterPage', {screen: 'RegisterPage'})
          }>
          <Text style={styles.registerText}>회원가입</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImg: {
    alignSelf: 'center',
    marginTop: 30,
  },
  titleText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 40,
  },
  emailView: {
    marginTop: 70,
  },
  passwordView: {
    marginTop: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 50,
    marginBottom: 5,
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
    height: 54,
    width: 314,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    color: '#000000',
  },
  loginView: {
    backgroundColor: '#9C91B5',
    height: 54,
    width: 179,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 80,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  registerText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 10,
  },
})
