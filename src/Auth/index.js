import React, { useState,createContext } from 'react';
import Component from 'react';
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
    ToastAndroid,
    NativeModules,
    SafeAreaView
   
    
} from 'react-native'
import OTP from '../Auth/Otp'

// import { LogBox } from 'react-native';


// LogBox.ignoreLogs(['Setting a timer']);

import{container} from "native-base"
import auth from '@react-native-firebase/auth';
 //import {db} from '../config';
import { State } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

 //import {firebase} from '../config';     
  //import storage from '@react-native-firebase/storage'; 
const { width, height } = Dimensions.get("window")

//import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase'

import '../config';
function Mobile(props) {
   
   
    const [number, setNumber] = useState('')
   
   
    const  signin = async () => {
        console.log("dssds");
        const confirmation = await auth().signInWithPhoneNumber('+91'+number);
        console.log("confirmation", confirmation)
        if(confirmation){
            // setConfirm(confirmation);
            props.navigation.navigate('OTP',{'confirm':confirmation,'numb':number})
        }
    }

    // let addItem = item => {
    //     db.ref('/login').push({
    //         number: item
    //     });
    //   };

      const submidata1=async()=>
      {
        //console.log("dssds");
        //   const doc=await firestore().collection('login').doc('ABC');
        //   citiesRef.doc("SF").set({
        //     name: "San Francisco", state: "CA", country: "USA",
        //     capital: false, population: 860000,
        //     regions: ["west_coast", "norcal"] });
    //     
    firestore()
    .collection('login')
    .doc(number)
    .set({
        Mobilenumber: number
    })

  
  .then(() => {
    console.log('User added!');
  });
      }
       
    //
    //  const handleSubmit = () => {
       
        
    //     addItem(number);
    //     Alert.alert('Item saved successfully');
    //   };


    // async function submidata() {
    //     const usersQuerySnapshot = await firestore().collection('Users').get();
        
    // }
    
    
    
        return (

            
        
            <SafeAreaView style={styles.container}>
               
              
                        <ImageBackground source={require('../Assets/test1.jpeg')}style={styles.image}>
                        <View style={{ height: height, width: '100%', flex: 1, justifyContent: 'center', }}>
                      
                              
                            <View style={{
                                justifyContent: 'space-between', flexDirection: 'row', height: 40,
                                marginTop: 7, alignItems: 'center', marginHorizontal: 5
                                
                            }}>
                               <Image
                   source={require('../Assets/12.png')}
                    style={{height:200,width:150,marginLeft:103,justifyContent: 'center', marginTop:-180,}}
                  />
                            </View>
                            
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: 'white',
                                marginLeft: 20,
                                marginTop: 25,
                                marginBottom: 15

                            }}>Sign in to continue</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>

                                
                                <TextInput
                                    style={{
                                        marginBottom: 20, color: 'black', width: '100%',
                                
                                        borderBottomColor: 'white', borderBottomWidth: 1,
                                    }}
                                    placeholder='Enter 10 digit Mobile Number'
                                    placeholderTextColor="black" underlineColorAndroid={'transparent'}
                                    keyboardType="number-pad"
                                    onChangeText={(value) => setNumber(value)}
                                    value={number}
                                    maxLength={10}
                                />
                                <TouchableOpacity
                                   
                                   onPress={signin} onPressOut={submidata1}
                                    // disabled={ number.length == 10 ? false : true}
                                    style={[styles.listView,{backgroundColor:number.length == 10 ? '#F660AB' :'grey'}]}>
                                    <Text style={{
                                        color: 'seashell',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>
                                        Continue</Text>
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

export default Mobile ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#38ACEC',
       
        opacity: .98,
       
       
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
