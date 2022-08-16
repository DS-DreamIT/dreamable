import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
} from 'react-native'
import BadgeData from '../../assets/data/BadgeData'
import TopBar from '../../components/Common/TopBar'
import Config from 'react-native-config'
import * as Progress from 'react-native-progress'
import AsyncStorage from '@react-native-async-storage/async-storage'

const List = BadgeData.map((BadgeData, index) => {
  var a = (
    <View>
      <Text>{BadgeData.eng}</Text>
    </View>
  )
  return a
})
const Modaldescription = BadgeData.map((BadgeData, index) => {
  var b = <Text>{BadgeData.description}</Text>
  return b
})
let badgecount = 0

// @ts-ignore
export default function BadgePage({navigation}) {
  let data = BadgeData
  let yn = false
  const [userId, setUserId] = useState('')
  const [badges, setBadges] = useState([])
  const [spinner, setSpinner] = useState(true)
  const [happyModal, setHappyModal] = useState(false)
  const [neutralityModal, setNeutralityModal] = useState(false)
  const [sadModal, setSadModal] = useState(false)
  const [fearModal, setFearModal] = useState(false)
  const [angerModal, setAngerModal] = useState(false)
  const [unrestModal, setUnrestModal] = useState(false)
  const [surprisedModal, setSurprisedModal] = useState(false)
  const [flutterModal, setFlutterModal] = useState(false)
  const [fullmoonModal, setFullmoonModal] = useState(false)
  const [dreampieceModal, setDreampieceModal] = useState(false)
  const [writingbeginnerModal, setWritingbeginnerModal] = useState(false)
  const [dreamtravelerModal, setDreamtravelerModal] = useState(false)
  const [likeadreamModal, setLikeadreamModal] = useState(false)
  const [dreamunlockModal, setDreamunlockModal] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      setUserId(JSON.parse(user).id)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetch(`${Config.API_URL}/api/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(response => {
          if (response.success) {
            // 유저 뱃지 배열 불러옴
            setBadges(response.user.badge)
            console.log(response.user)
            setSpinner(false)
          }
        })
    }
  }, [userId])

  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} type={'BACK'} />
        {data.map((BadgeData, index) => {
          if (index === 0) {
            console.log(badges)
            if (badges.includes('HappyBadge') === true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={happyModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setHappyModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 1) {
            if (badges.includes('NeutralityBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={neutralityModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setNeutralityModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 2) {
            if (badges.includes('SadBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={sadModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setSadModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 3) {
            if (badges.includes('FearBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={fearModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setFearModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 4) {
            if (badges.includes('AngerBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={angerModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setAngerModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 5) {
            if (badges.includes('UnrestBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={unrestModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setUnrestModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 6) {
            if (badges.includes('SurprisedBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={surprisedModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setSurprisedModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 7) {
            if (badges.includes('FlutterBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={flutterModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setFlutterModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 8) {
            if (badges.includes('FullmoonBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={fullmoonModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setFullmoonModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 9) {
            if (badges.includes('DreampieceBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={dreampieceModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setDreampieceModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 10) {
            if (badges.includes('WritingBeginnerBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={writingbeginnerModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setWritingbeginnerModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 11) {
            if (badges.includes('DreamTravelerBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={dreamtravelerModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setDreamtravelerModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 12) {
            if (badges.includes('LikeADreamBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={likeadreamModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setLikeadreamModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          } else if (index == 13) {
            if (badges.includes('DreamunlockBadge') == true) {
              return (
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={dreamunlockModal}>
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalBox}>
                      <Text style={styles.modalTitle}>{BadgeData.kor}</Text>
                      <Text style={styles.modalText}>
                        {BadgeData.description}
                      </Text>
                      <Button
                        title="닫기"
                        color={'#F1B2B2'}
                        onPress={() => setDreamunlockModal(false)}
                      />
                    </View>
                  </View>
                </Modal>
              )
            }
          }
        })}

        <Image
          source={require('../../assets/icons/badgelogo.png')}
          style={styles.backPNG}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={styles.backstarPNG}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={styles.backstar2PNG}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={styles.backstar3PNG}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={styles.backstar4PNG}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={styles.backstar5PNG}
        />
        <Image
          source={require('../../assets/icons/star.png')}
          style={styles.backstar6PNG}
        />
        {spinner ? (
          <View style={[styles.spinner]}>
            <Progress.Circle
              size={30}
              indeterminate={true}
              borderColor={'#ffffff'}
            />
          </View>
        ) : (
          <Text />
        )}

        <View>
          {data.map((BadgeData, index) => {
            if (index == 0) {
              console.log('요기')
              console.log(badges)
              if (badges.includes('HappyBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setHappyModal(true)}>
                    <View key={index} style={styles.happystyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 1) {
              if (badges.includes('NeutralityBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setNeutralityModal(true)}>
                    <View key={index} style={styles.neutralitystyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 2) {
              if (badges.includes('SadBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setSadModal(true)}>
                    <View key={index} style={styles.sadstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 3) {
              if (badges.includes('FearBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setFearModal(true)}>
                    <View key={index} style={styles.fearstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 4) {
              if (badges.includes('AngerBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setAngerModal(true)}>
                    <View key={index} style={styles.angerstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 5) {
              if (badges.includes('UnrestBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setUnrestModal(true)}>
                    <View key={index} style={styles.unreststyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 6) {
              if (badges.includes('SurprisedBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setSurprisedModal(true)}>
                    <View key={index} style={styles.surprisestyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 7) {
              if (badges.includes('FlutterBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setFlutterModal(true)}>
                    <View key={index} style={styles.flutterstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgestyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 8) {
              if (badges.includes('FullmoonBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setFullmoonModal(true)}>
                    <View key={index} style={styles.fullmoonstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgeallstyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 9) {
              if (badges.includes('DreampieceBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setDreampieceModal(true)}>
                    <View key={index} style={styles.dreampiecestyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgeallstyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 10) {
              if (badges.includes('WritingBeginnerBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity
                    onPress={() => setWritingbeginnerModal(true)}>
                    <View key={index} style={styles.writingbeginnerstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgeallstyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 11) {
              if (badges.includes('DreamTravelerBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setDreamtravelerModal(true)}>
                    <View key={index} style={styles.dreamtravelstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgeallstyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 12) {
              if (badges.includes('LikeADreamBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setLikeadreamModal(true)}>
                    <View key={index} style={styles.likeadreamstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgeallstyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            } else if (index == 13) {
              if (badges.includes('DreamunlockBadge') == true) {
                badgecount += 1
                return (
                  <TouchableOpacity onPress={() => setDreamunlockModal(true)}>
                    <View key={index} style={styles.dreamunlockstyle}>
                      <Image
                        source={BadgeData.src}
                        style={styles.badgeallstyle}></Image>
                      <Text style={styles.badgetext}>{BadgeData.kor}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }
            }
          })}
        </View>
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
  viewbig: {
    flexDirection: 'row',
  },
  line1PNG: {
    marginLeft: 85,
    height: 450,
    position: 'absolute',
  },
  line2PNG: {
    marginLeft: 200,
    height: 400,
    position: 'absolute',
  },
  line3PNG: {
    marginLeft: 300,
    height: 500,
    position: 'absolute',
  },
  backPNG: {
    position: 'absolute',
    top: 70,
    left: 60,
  },
  backstarPNG: {
    position: 'absolute',
    top: 100,
    left: 60,
  },
  backstar2PNG: {
    position: 'absolute',
    top: 150,
    left: 300,
  },
  backstar3PNG: {
    position: 'absolute',
    top: 220,
    left: 110,
  },
  backstar4PNG: {
    position: 'absolute',
    top: 450,
    left: 170,
  },
  backstar5PNG: {
    position: 'absolute',
    top: 600,
    left: 60,
  },
  backstar6PNG: {
    position: 'absolute',
    top: 550,
    left: 260,
  },
  badgestyle: {
    width: 100,
    height: 100,
  },
  badgeallstyle: {
    width: 80,
    height: 80,
  },
  happystyle: {
    position: 'absolute',
    marginTop: 40,
    left: 35,
  },
  neutralitystyle: {
    position: 'absolute',
    marginTop: 160,
    left: 35,
  },
  sadstyle: {
    position: 'absolute',
    marginTop: 280,
    left: 35,
  },
  fearstyle: {
    position: 'absolute',
    marginTop: 400,
    left: 35,
  },
  angerstyle: {
    position: 'absolute',
    marginTop: 400,
    left: 150,
  },
  unreststyle: {
    position: 'absolute',
    marginTop: 40,
    left: 150,
  },
  surprisestyle: {
    position: 'absolute',
    marginTop: 160,
    left: 150,
  },
  flutterstyle: {
    position: 'absolute',
    marginTop: 280,
    left: 150,
  },
  fullmoonstyle: {
    position: 'absolute',
    marginTop: 285,
    left: 280,
  },
  dreampiecestyle: {
    position: 'absolute',
    marginTop: 395,
    left: 280,
  },
  writingbeginnerstyle: {
    position: 'absolute',
    marginTop: 65,
    left: 280,
  },
  dreamtravelstyle: {
    position: 'absolute',
    marginTop: 175,
    left: 280,
  },
  likeadreamstyle: {
    position: 'absolute',
    marginTop: 285,
    left: 280,
  },
  dreamunlockstyle: {
    position: 'absolute',
    marginTop: 395,
    left: 280,
  },
  badgetext: {
    fontFamily: 'SCDream3',
    color: '#ffffff',
    textAlign: 'center',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalBox: {
    flex: 0.7,
    borderRadius: 5,
    borderColor: '#cccccc',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  modalcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'SCDream5-Regular',
    marginBottom: 10,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SCDream4',
    marginBottom: 10,
  },
})
