import React, {useContext, useState} from 'react'
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {isEmail, isNickname, isPassword} from '../../regular/check'
import {AuthContext} from '../../components/Login/context'
import Config from 'react-native-config'

export default function RegisterPage() {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPw] = useState('')
  const [checkE, setCheckE] = useState(false)

  const {signUp} = useContext(AuthContext)

  const inputNickname = (newText: React.SetStateAction<string>) => {
    setNickname(newText)
  }

  const inputEmail = (newText: React.SetStateAction<string>) => {
    setEmail(newText)
  }

  const inputPw = (newText: React.SetStateAction<string>) => {
    setPw(newText)
  }

  const checkEmail = () => {
    fetch(`${Config.API_URL}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: email,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (!isEmail(email) && response.registerSuccess === undefined) {
          Alert.alert('Warning', '이메일 형식이 옳지 않습니다.')
          setEmail('')
          setCheckE(false)
        } else if (
          !response.registerSuccess &&
          response.registerSuccess !== undefined
        ) {
          Alert.alert('Warning', response.message)
          setEmail('')
          setCheckE(false)
        } else if (response.registerSuccess === undefined) {
          Alert.alert('가능', '사용 가능한 이메일입니다.')
          setCheckE(true)
        }
      })
  }

  const registerHandle = (nickname, email, password) => {
    if (isNickname(nickname) && isPassword(password) && checkE) {
      signUp(nickname, email, password)
    } else {
      Alert.alert('Failed', 'nickname or email or password 확인')
    }
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
        <View style={styles.nicknameView}>
          <Text style={styles.text}>NICKNAME</Text>
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={inputNickname}
              value={nickname}
              style={styles.input}
              placeholder="이름을 입력하세요. (6글자 이하)"
              placeholderTextColor={'#6B448A'}
            />
          </View>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.text}>EMAIL</Text>
          <View style={styles.emailCheckView}>
            <View style={styles.emailInputBox}>
              <TextInput
                onChangeText={inputEmail}
                value={email}
                style={styles.input}
                placeholder="이메일을 입력하세요."
                placeholderTextColor={'#6B448A'}
              />
            </View>
            <TouchableOpacity style={styles.emailCheckBox} onPress={checkEmail}>
              <Text style={styles.emailCheckText}>확인</Text>
            </TouchableOpacity>
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
              placeholder="비밀번호를 입력하세요."
              placeholderTextColor={'#6B448A'}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.registerView}
          onPress={() => registerHandle(nickname, email, password)}>
          <Text style={styles.registerText}>Register</Text>
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
  nicknameView: {
    marginTop: 30,
  },
  emailView: {
    marginTop: 20,
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
  emailInputBox: {
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
    height: 54,
    width: 243,
    borderRadius: 5,
    justifyContent: 'center',
  },
  emailCheckBox: {
    backgroundColor: '#9C91B5',
    height: 54,
    width: 67,
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 5,
  },
  emailCheckView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailCheckText: {
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
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
  registerView: {
    backgroundColor: '#9C91B5',
    height: 54,
    width: 179,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 45,
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
})
