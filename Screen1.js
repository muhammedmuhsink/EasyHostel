import React, {Component} from "react";
import { View,Text,Button,StyleSheet,TouchableOpacity } from "react-native";


export default class App extends Component
{
  render()
  {
    return(
      <View style={styles.container} >
        <Text>screen1</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:"center",
      alignSelf:"center",
      width:"100%",
      height:"100%",
  
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
});