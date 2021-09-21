import React,{useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Alert} from 'react-native';
import {orangeish} from "../colors/Color"

function ListItem1 (props){
 

    // var datapress={
    //     'title': props.item.Title,
    //     'num': props.item.numb,
    //     'imageUrl' :props.item.imageUrl,
    //     'rent' : props.item.Rent,
    //     'other' : props.item.Other,
    //     'username' : props.item.username,
    //     'Mob' : props.item.Mob,
    //     'usertype' : props.item.usertype,
        
    // }
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

    //    const DeleteModule = async () => {
    //     Alert.alert(
    //         'Delete Module ',
    //         'Do you want to Delete ...',
    //         [
    //           {text: 'NO'},
    //           {text: 'YES', onPress: () => Deletepress(datapress) },
    //         ]
    //       );
           

    //    }
    // const {imagepass} = useContext(ImageContext);
    return (
        <View  style={styles.each}>
            {/* <View>
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
                                      Add</Text>
       </TouchableOpacity>
       
            <TouchableOpacity onPress={() => props.navigation.navigate('Detail',{"datapress":datapress})}
       style={[styles.listView,{backgroundColor:'#483D8B'}]}>
       <Text style={{
                                      color: 'grey',
                                      fontSize: 15,
                                      fontWeight: 'bold'
                                  }}>
                                      View</Text>
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
        </View>  */}
        </View>
    
    

    // <TouchableOpacity onPress={props.onPress}>{content}></TouchableOpacity>
    );
}

export default ListItem1; 

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
