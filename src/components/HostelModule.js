import React,{Component} from 'react'
import {    
    View,
    Image,
    TouchableOpacity, 
    Text,
    AppRegistry} from 'react-native'
import { back } from 'react-native/Libraries/Animated/Easing';
import firestore from '@react-native-firebase/firestore';
import { retrieve } from './addretrieve';
export default class HostelModule extends React.Component{
    render(){ 
        const  signinl = async () => {
         
            retrieve()
        }
        return(
            <TouchableOpacity
            onPress={this.props.onPress}
            onPressOut={signinl}
            style={{
                backgroundColor:"#f5f5fa",
                height:280,
                width:160,
                borderRadius:4,
                marginTop:this.props.marginTop,
                marginRight:10
            }}
          >
              <View style={{
                  flexDirection:"row",
                  alignItems:"center",
                  alignSelf:"center",
                  marginTop:20
                  
              }}>
                  <Image
                   source={require('../Assets/Hr.jpg')}
                    style={{height:200,width:150,marginLeft:20,marginTop:-12, borderRadius:4    }}
                  />
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      fontSize:16
                  }}>
                  </Text>
              </View>
              <Image
                source={this.props.image}
                style={{
                    height:105,
                    alignSelf:"center",
                    width:130,
                    marginTop:15,
                    marginBottom:15
                }}
              />
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10
              }}>
                  {this.props.title}
              </Text>
              <Text style={{
                  fontSize:15,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  color:"#848385"
              }}>
                  Beef burger
              </Text>
          </TouchableOpacity>
        );
    }
}