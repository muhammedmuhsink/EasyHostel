import React from 'react';
import {
    
    View,
    StyleSheet,
    TextInput,
  
} from 'react-native'
import {Button,Right} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native';

export default function  Searchbar(props){
    var userdata=
    {
        "numb":props.userdata.numb,
      "usertype":props.userdata.usertype,
      "username":props.userdata.username,
  
      
    }


    const addpress = async () => {
     props.navigation.navigate('Test',{"userdata":userdata});
       
         console.log("sdsd")
       }
     
        return(
            <View>
                <TouchableOpacity >
                <TextInput placeholder="Search here.."
                onPressIn={addpress}
                />
                
                <Button  transparent style={styles.custom}   >
             <Icon name="search1" color="black" size={26} />
             </Button>
               
                </TouchableOpacity>
                
            </View>
        );
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        height:50,
        backgroundColor:'white',
        borderRadius:8
 
       
    },
    SearchInput:{
        width:"100%",
        height:"100%",
        paddingLeft:8,
        fontSize:16

    },
    custom:{
        marginLeft:280,
        marginTop:-46
    }
    
})