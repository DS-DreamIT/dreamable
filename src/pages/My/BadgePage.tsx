import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert} from 'react-native'
import BadgeData from '../../assets/data/BadgeData'
import TopBar from '../../components/Common/TopBar'
import Config from 'react-native-config'
import * as Progress from 'react-native-progress'



const List = BadgeData.map((BadgeData, index)=>{
    var a = <View><Text>{BadgeData.eng}</Text></View>
    return a
})
const Modaldescription = BadgeData.map((BadgeData, index)=>{
    var b = <Text>{BadgeData.description}</Text>
    return b
})
let badgecount = 0

// @ts-ignore
export default function BadgePage({navigation}) {
    let data=BadgeData
    let yn=false
    const [badges, setBadges] = useState([])
    const [spinner, setSpinner] = useState(true)
    const userId = '62df4bc8f1ff31b19db9ace9'


    useEffect(() => {
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
      }, [])

    
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.bgImage}>
        <TopBar navigation={navigation} />

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
              <Text/>
            )}
        
        <View>
            {data.map((BadgeData, index)=>{
                if(index==0){
                    console.log("요기")
                    console.log(badges)
                    if(badges.includes("HappyBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                            <View key={index} style={styles.happystyle}>
                                <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                    
                }
                else if(index==1){
                    if(badges.includes("NeutralityBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.neutralitystyle}>
                                <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==2){
                    if(badges.includes("SadBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.sadstyle}>
                                <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==3){
                    if(badges.includes("FearBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.fearstyle}>
                                 <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                 <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==4){
                    if(badges.includes("AngerBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.angerstyle}>
                                <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==5){
                    if(badges.includes("UnrestBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.unreststyle}>
                                <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==6){
                    if(badges.includes("SurpriseBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.surprisestyle}>
                                <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==7){
                    if(badges.includes("FlutterBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.flutterstyle}>
                                <Image source={BadgeData.src} style={styles.badgestyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==8){
                    if(badges.includes("FullmoonBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.fullmoonstyle}>
                                <Image source={BadgeData.src} style={styles.badgeallstyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==9){
                    if(badges.includes("DreampieceBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.dreampiecestyle}>
                                <Image source={BadgeData.src} style={styles.badgeallstyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==10){
                    if(badges.includes("WritingbeginnerBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.writingbeginnerstyle}>
                                <Image source={BadgeData.src} style={styles.badgeallstyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==11){
                    if(badges.includes("DreamtravelBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.dreamtravelstyle}>
                                <Image source={BadgeData.src} style={styles.badgeallstyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==12){
                    if(badges.includes("LikeadreamBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.likeadreamstyle}>
                                <Image source={BadgeData.src} style={styles.badgeallstyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
                            </View>
                            </TouchableOpacity>
                            
        
                        )
                    }
                }
                else if(index==13){
                    if(badges.includes("DreamunlockBadge")==true){
                        badgecount+=1
                        return (
                            <TouchableOpacity onPress={() => Alert.alert(BadgeData.eng, BadgeData.description)}>
                                <View key={index} style={styles.dreamunlockstyle}>
                                <Image source={BadgeData.src} style={styles.badgeallstyle}></Image>
                                <Text style={styles.badgetext}>{BadgeData.eng}</Text>
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
      flexDirection: 'row'
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
      top: 80,
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
      width: 70,
      height: 70
  },
  happystyle: {
    position: 'absolute',
    marginTop: 50,
    left: 35,
  },
  neutralitystyle: {
    position: 'absolute',
    marginTop: 160,
    left: 35,
  },
  sadstyle: {
    position: 'absolute',
    marginTop: 270,
    left: 35,
  },
  fearstyle: {
    position: 'absolute',
    marginTop: 380,
    left: 35,
  },
  angerstyle: {
    position: 'absolute',
    marginTop: 490,
    left: 35,
  },
  unreststyle: {
    position: 'absolute',
    marginTop: 50,
    left: 150,
  },
  surprisestyle: {
    position: 'absolute',
    marginTop: 160,
    left: 150,
  },
  flutterstyle: {
    position: 'absolute',
    marginTop: 270,
    left: 150,
  },
  fullmoonstyle: {
    position: 'absolute',
    marginTop: 380,
    left: 165,
  },
  dreampiecestyle: {
    position: 'absolute',
    marginTop: 490,
    left: 165,
  },
  writingbeginnerstyle: {
    position: 'absolute',
    marginTop: 65,
    left: 280,
  },
  dreamtravelstyle: {
    position: 'absolute',
    marginTop: 165,
    left: 280,
  },
  likeadreamstyle: {
    position: 'absolute',
    marginTop: 265,
    left: 280,
  },
  dreamunlockstyle: {
    position: 'absolute',
    marginTop: 365,
    left: 280,
  },
  badgetext: {
    fontFamily: 'RobotoLightItalic',
    color: '#ffffff',
    textAlign: 'center'
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})