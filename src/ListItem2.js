import React,{useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Alert} from 'react-native';
import {orangeish} from "../colors/Color"
import {DeleteNotificationpress} from './components/addretrieve'
function ListItem2 (props){

 
    var datapress={
        'title': props.item.title,
        'num': props.item.numb,
        'imageUrl' :props.item.imageUrl,
        'rent' : props.item.rent,
        'other' : props.item.other,
        'username' : props.item.username,
        'Mob' : props.item.Mob,
        'usertype' : props.item.usertype,
        "userno":props.item.userno,
        
    }
   
    // const addpress = async () => {
    //     Alert.alert(
    //         'Add module',
    //         'Do you want to add this...',
    //         [
    //           {text: 'NO'},
    //           {text: 'YES', onPress: () =>addpressdata(datapress) },
    //         ]
    //       );
       
         
    //    }

       const DeleteModule = async () => {
        Alert.alert(
            'Delete Module ',
            'Do you want to Delete ...',
            [
              {text: 'NO'},
              {text: 'YES', onPress: () => DeleteNotificationpress(datapress) },
            ]
          );
           

       }
    // const {imagepass} = useContext(ImageContext);
    return (
        <View  style={styles.each}>



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
        <Text style= {styles.text}>{props.item.username}</Text>

     
        </View>
        <View style={{
                              marginTop:-100,
                              marginLeft:60
                           }}>
        <Text style={{
                               fontWeight:"bold",
                               fontSize:20,
                               color:"#696969"
                           }}>
                            {props.item.title}
                           </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:20,
                               color:"#696969"
                           }}>
                            {props.item.num}
                           </Text>
        </View>
       <View style= {styles.textView} >
            <Text style= {styles.text}>₹{props.item.rent}</Text>
        </View>
        
       
       
     
        
        
    </View>
    <View style={styles.touc}>
 
    <TouchableOpacity 
       style={[styles.listView,{backgroundColor:'#483D8B'}]}>
       <Text style={{
                                      color: '#C0C0C0',
                                      fontSize: 15,
                                      fontWeight: 'bold'
                                  }}>
                                      Chat</Text>
       </TouchableOpacity>
           
       
       
            <TouchableOpacity onPress={DeleteModule}
       style={[styles.listView,{backgroundColor:'#483D8B'}]}>
       <Text style={{
                                      color: '#C0C0C0',
                                      fontSize: 15,
                                      fontWeight: 'bold'
                                  }}>
                                      Delete</Text>
       </TouchableOpacity>
        </View> 
        </View>
    
    

    // <TouchableOpacity onPress={props.onPress}>{content}></TouchableOpacity>
    );
}

export default ListItem2; 

const styles = StyleSheet.create({
    content : {
        padding : 5,
        flexDirection: 'row',
        justifyContent : "space-between",
        
        borderColor : "black"
    },
    textView : {
        justifyContent : 'center',
        marginLeft:-8

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
        width: '46%',
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
        height: 220,
        borderRightColor:"black",
        borderWidth:1,
        borderRadius:5 ,
        
        
    }

});
