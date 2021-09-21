
import React,{useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {orangeish} from "../colors/Color"
import { addpressdata } from './components/addretrieve';
import Detail from './components/Detail';
// import { ImageContext } from '../src/components/Imagepicke';
function Product (props){
    
    var datapress={
        'title': props.item.title,
        'num': props.item.num,
        'imageUrl' :props.item.imageUrl,
        'rent' : props.item.rent,
        'other' : props.item.other,
        'username' : props.item.username,
        'Mob' : props.item.Mob,
        'usertype' : props.item.usertype,
        
    }


    
    const Modpress = async () => {
       
        //  props.navigation.navigate('Detail');

    }
    
    // const {imagepass} = useContext(ImageContext);
    return (
        <View >
            <TouchableOpacity
            onPress={Modpress}
            style={{
                backgroundColor:"#f5f5fa",
                height:280,
                width:160,
                borderRadius:4,
                marginTop:props.marginTop,
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
                   source={{uri:props.item.imageUrl}}
                    style={{height:200,width:150,marginLeft:20,marginTop:-12, borderRadius:4    }}
                  />
                  <Text style={{
                      paddingHorizontal:10,
                      fontWeight:"bold",
                      fontSize:16
                  }}>
                  </Text>
              </View>
              {/* <Image
                source={props.image}
                style={{
                    height:105,
                    alignSelf:"center",
                    width:130,
                    marginTop:15,
                    marginBottom:15
                }}
              /> */}
              <Text style={{
                  fontSize:18,
                  fontWeight:"bold",
                  paddingHorizontal:10
              }}>
                  {props.item.title}
              </Text>
              <Text style={{
                  fontSize:15,
                  fontWeight:"bold",
                  paddingHorizontal:10,
                  color:"#848385"
              }}>
                  ₹{props.item.rent}
              </Text>
          </TouchableOpacity>
           
    
        </View>
    
    

    // <TouchableOpacity onPress={props.onPress}>{content}></TouchableOpacity>
    );
}

export default Product; 

const styles = StyleSheet.create({
    content : {
        padding : 5,
        flexDirection: 'row',
        justifyContent : "space-between",
        
        borderColor : "black"
    },
    textView : {
        justifyContent : 'center'
    },
    text: {
        fontSize: 25,
        color: "black"
    },
    image : {
        height : 100,
        width : 125,
        borderWidth : 2,
        borderRadius : 30
    },
    listView: {
        width: '28%',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: 5,
        marginLeft:8,marginRight:8,
        flexDirection:"row"
        
  
    },
    touc:{
        flexDirection:"row",
             
    },
    each:{
        width: '100%',
        height: 200,
        borderRightColor:"black",
        borderWidth:1,
        borderRadius:5 ,
        
        
    }

});
