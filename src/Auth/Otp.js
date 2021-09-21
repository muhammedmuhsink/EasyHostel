import React, { Component, useState,useContext } from 'react';
// import { useContext1 } from './index';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Pressable,
    StatusBar,
    SafeAreaView,
    ToastAndroid
} from 'react-native'

const { width, height } = Dimensions.get("window")

function OTP(props)  {
    // const number1=useContext(useContext1)
    // console.log("numbersssssss",number1)
    const numb  = props.navigation.getParam('numb');
    console.log("number",numb )
    const [number, setNumber] = useState('');
    console.log("number11",number )
    const confirm  = props.navigation.getParam('confirm');
    console.log("route", confirm)
    const  OtpVerify = async () => {
        try {
           let data = await confirm.confirm(number);
           console.log("data", data);
           if(data)
           {
            props.navigation.navigate('CreateAccount',{'numb':numb})
           }
        } catch (error) {
        console.log('Invalid code.');
        ToastAndroid.show('Invalid code.',ToastAndroid.SHORT)
        }
    }

        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../Assets/test1.jpeg')}style={styles.image}>
                        <View style={{ height: height, width: '100%', flex: 1, justifyContent: 'center' }}>
                        <View style={{
                                justifyContent: 'space-between', flexDirection: 'row', height: 40,
                                marginTop: 7, alignItems: 'center', marginHorizontal: 5
                                
                            }}>
                               <Image
                   source={require('../Assets/12.png')}
                    style={{height:200,width:150,marginLeft:103,justifyContent: 'center', marginTop:-180,}}
                  />
                            </View>

                        {/* <Image
                          source={require('../Assets/pngtest.png')}
                         style={{height:200,width:150,marginLeft:103,justifyContent: 'center', marginTop:-180,}}
                          /> */}
                            <View style={{
                                justifyContent: 'space-between', flexDirection: 'row', height: 40,
                                marginTop: 7, alignItems: 'center', marginHorizontal: 5
                            }}>
                            </View>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: 'white',
                                marginLeft: 20,
                                marginTop: 25,
                                marginBottom: 15

                            }}>Verify OTP</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                                <TextInput
                                    style={{
                                        marginBottom: 20, color: 'black', width: '100%',
                                        borderBottomColor: 'white', borderBottomWidth: 1,
                                    }}
                                    placeholder='Enter 6 digit OTP'
                                    placeholderTextColor="black" underlineColorAndroid={'transparent'}
                                    keyboardType="number-pad"
                                    onChangeText={(value) => setNumber(value)}
                                    value={number}
                                    maxLength={6}
                                />
                                <TouchableOpacity
                                    onPress={OtpVerify}
                                    disabled={ number.length == 6 ? false : true}
                                    style={[styles.listView,{backgroundColor:number.length == 6 ? '#F660AB' :'grey'}]}>
                                    <Text style={{
                                        color: 'seashell',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>
                                        Login</Text>
                                </TouchableOpacity>
                                <View style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    height: 25,
                                    width: '100%',
                                }}>
                                </View>
                              
                            </View>
                        </View>
                        </ImageBackground>
                        
                       </SafeAreaView>
        );
}

export default OTP ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        opacity: .99,
    },
    listView: {
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    fbButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4267B2',
        borderRadius: 5,
        color: 'white', padding: 11,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    googleButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
        color: 'white',
        padding: 11,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    hairline: {
        backgroundColor: '#A2A2A2',
        height: 0.5,
        width: '40%',
        marginTop: 19
    },

    lineLowText1: {
        fontFamily: 'AvenirNext-Bold',
        fontSize: 15,
        color: '#A2A2A2',
        width: '20%',
        textAlign: 'center',
        marginTop: 7
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },


})
