import React, { useState,useContext } from 'react';
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
    SafeAreaView,
    Alert
} from 'react-native'
//import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import auth from '@react-native-firebase/auth';
import {Picker} from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import color from 'color';
//import {Test} from './src/Test'

// import { AuthContext1 } from '../Auth/index';
function  CreateAccount(props)  {
     
    const numb  = props.navigation.getParam('numb');
    console.log("number",numb )

    // const {number} = useContext(AuthContext1);
 
    const [username, setUsername] = useState('')
        const [ usertype, setUser ] = useState("");
        
       const  create = async () => {

        
            
           if(usertype=='User')
           {

             props.navigation.navigate('Main',{'numb':numb,'username':username,'usertype':usertype})
           }
           else
           {
            props.navigation.navigate('OwnerMain',{'numb':numb,'username':username,'usertype':usertype})
           }
           
         
         }

         const submidata2=async()=>
         {
           
       firestore()
       .collection('login')
       .doc(numb)
       .collection(usertype)
       .doc("create")  
       .set({
           Username: username,
           Type:usertype
       })
   
     
     .then(() => {
       console.log('User added!');
     });
         }


         
         
        return(
            
            //<Text>dsn</Text>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../Assets/test1.jpeg')}style={styles.image}>
                    
            <View style={{ height: '100%', width: '100%', flex: 1, justifyContent: 'center', }}>
               
            
              <View style={{
                justifyContent: 'space-between', flexDirection: 'row', height: 40,
                marginTop: 7, alignItems: 'center', marginHorizontal: 5
            }}>
                 <Image
                   source={require('../Assets/12.png')}
                    style={{height:200,width:150,marginLeft:103,justifyContent: 'center', marginTop:-160,}}
                  />
                  
            </View>
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'white',
                marginLeft: 20,
                marginTop: 25,
                marginBottom: 15
    
            }}> Create An Account</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
              
    
    
    
    
    
                 <TextInput
                    style={{
                        marginBottom: 20, color: 'white', width: '100%',
                        borderBottomColor: 'white', borderBottomWidth: 1,
                    }}
                    placeholder='Username'
                    placeholderTextColor="black" underlineColorAndroid={'transparent'}
                    keyboardType="default"
                    onChangeText={(value) => setUsername(value)}
                                    value={username}
                    
                />
                 <Picker

             
           //selectedValue={this.state.language} 
            style={{
                marginBottom: 20, color: 'black', width: '100%',
                borderBottomColor: 'black', borderBottomWidth: 1,
                marginLeft:-5,
            }}
            onValueChange={(usertype) => setUser(usertype)   }
          >
              
            <Picker.Item label="Hostel Owner" value="Hostel Owner" />
            <Picker.Item label="User" value="User" />
          </Picker>
         
                <TouchableOpacity style={[styles.listView]} onPress={create}onPressOut={submidata2}>
                    
                    <Text style={{
                        color: 'seashell',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>
                        Submit</Text>
                </TouchableOpacity >
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
    
export default CreateAccount ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'black',
        opacity: .98,
    },
    listView: {
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#F660AB',
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