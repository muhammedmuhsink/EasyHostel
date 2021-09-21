import React,{useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Alert,ImageBackground} from 'react-native';
import {orangeish} from "../colors/Color"
import {Deletepress} from './components/addretrieve'
import { addpressdata } from './components/addretrieve';
import { retrievepressed } from './components/addretrieve';
import Detail from './components/Detail';
// import { ImageContext } from '../src/components/Imagepicke';
function ListItem (props){
    var datapress={
        'title': props.item.Title,
        'num': props.item.numb,
        'imageUrl' :props.item.imageUrl,
        'rent' : props.item.Rent,
        'other' : props.item.Other,
        'username' : props.item.username,
        'Mob' : props.item.Mob,
        'usertype' : props.item.usertype,
        'place':props.item.place,
        'type':props.item.type
        
    }
    const addpress = async () => {
        Alert.alert(
            'Add module',
            'Do you want to Post this...',
            [
              {text: 'NO'},
              {text: 'YES', onPress: () =>addpressdata(datapress) },
            ]
          );
       
         
       }

       const retrievepress = async () => {
        Alert.alert(
            'Retrieve Module ',
            'Do you want to retrieve ...',
            [
              {text: 'NO'},
              {text: 'YES', onPress: () => retrievepressed(datapress) },
            ]
          );
           

       }

       const DeleteModule = async () => {
        Alert.alert(
            'Delete Module ',
            'Do you want to Delete ...',
            [
              {text: 'NO'},
              {text: 'YES', onPress: () => Deletepress(datapress) },
            ]
          );
           

       }
    // const {imagepass} = useContext(ImageContext);
    return (
        <TouchableOpacity  style={styles.each}
      
        onPress={() => props.navigation.navigate('Detail',{"datapress":datapress})}
        >
            
       
             
            <View> 
           
            <Image
                       source={{uri:props.item.imageUrl}}
                        style={{
                            height:100,
                            width:100,
                            alignSelf:"flex-start",
                            borderRadius:3,
                            marginLeft:5,
                            marginTop:5
                        }}
                   />
            </View>
            <View style={styles.content}>
       


            
        <View style={styles.imageView}>
        <Text style= {styles.text}>{props.item.Title}</Text>
        </View>
       <View style= {styles.textView} >
            <Text style= {styles.text}>₹{props.item.Rent}</Text>
        </View>
        
       
       
     
        
        
    </View>
    <View style={styles.touc}>
            <TouchableOpacity onPress={addpress}
       style={[styles.listView,{backgroundColor:'#483D8B'}]}>
       <Text style={{
                                      color: 'grey',
                                      fontSize: 15,
                                      fontWeight: 'bold'
                                  }}>
                                      Post</Text>
       </TouchableOpacity>
       
            <TouchableOpacity onPress={retrievepress}
       style={[styles.listView,{backgroundColor:'#483D8B'}]}>
       <Text style={{
                                      color: 'grey',
                                      fontSize: 15,
                                      fontWeight: 'bold'
                                  }}>
                                      Retrieve</Text>
       </TouchableOpacity>
      
            <TouchableOpacity onPress={DeleteModule}
       style={[styles.listView,{backgroundColor:'#483D8B'}]}>
       <Text style={{
                                      color: 'grey',
                                      fontSize: 15,
                                      fontWeight: 'bold'
                                  }}>
                                      Delete</Text>
       </TouchableOpacity>
       
        </View> 
       
        
       
        </TouchableOpacity>
    
    

    // <TouchableOpacity onPress={props.onPress}>{content}></TouchableOpacity>
    );
}

export default ListItem; 

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
