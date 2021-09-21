import  React, {Component,useState,useEffect}from 'react';
import {AppRegistry,View,Image, Text,StyleSheet, StatusBar,FlatList,TextInput,TouchableOpacity} from 'react-native'
import {Button,Right} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import {getuserSearchdatas} from '../components/addretrieve'
import { ScrollView } from 'react-native-gesture-handler'
import Product1 from '../Product1';

export default function T(props) {
    
    return(
     <View>
<Text>
    SD
</Text>
<Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/easyhostel-3414e.appspot.com/o/photos%2F1624892802025.%5Bobject%20Object%5D?alt=media&token=de614ab0-b23a-4fcb-9b0a-a5b7064269b5"}}/>
     </View>
       
    );

}

AppRegistry.registerComponent('Main',() =>Main);


const styles = StyleSheet.create({
    search: {
        paddingHorizontal:15,
        marginTop :StatusBar.currentHeight,
        backgroundColor:"white",
        borderWidth:2,
        borderRadius:15,
        marginLeft:8,
        width:"95%"
        
       
    },
    flatList  : {
        backgroundColor : "white",
        height : "100%",
        paddingTop : 10,
        paddingBottom : 100,
        paddingLeft :  5,
        paddingRight : 0,
        marginBottom : 40,
     
        borderRadius : 10,
        
        
    
    },
    custom:{
        marginLeft:280,
        marginTop:-46
    },
    
})
