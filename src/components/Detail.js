import { Container } from 'native-base'
import React from 'react'
import {View,Text, Image,AppRegistry,StyleSheet,TextInput} from 'react-native'
import {
    ScrollView,
    TouchableOpacity} 
    from 'react-native-gesture-handler'
//import Icon from '@expo/vector-icons/Entypo'


export default function Detail(props){
    
    const datapress  = props.navigation.getParam('datapress');
    console.log("dsd",datapress.place)
    // state={
    //     quantity:1
    // }

    // addQuantity = (quantity) => {
    //     this.setState({quantity: this.state.quantity + 1});
    // }
    // subtractQuantity = (quantity) => {
    //   if (this.state.quantity > 0) {
    //     this.setState({quantity: this.state.quantity - 1});
    //   }
       
    // }
   
        return(
            <Container style={{backgroundColor:"#E0E0E0"}}>
            <View style={{backgroundColor:"#FFF"},{marginTop:5}} >
               <ScrollView>
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginTop:40,
                       marginHorizontal:20
                   }}>
                       <View style={{width:"10%"}}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <Image
                                   // source={require('../Assets/car.jpg')}
                                />
                            </TouchableOpacity>
                       </View>
                       <View style={{width:"80%",alignItems:"center"}}>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                                alignSelf:"center"
                            }}>
                                <Image
                                   // source={require('../Assets/car.jpg')}
                                    style={{height:25,width:20}}
                                />
                                
                            </View>
                       </View>
                       <View style={{width:"10%"}}>
                                
                       </View>
                   </View>
                   <Image
                       source={{uri:datapress.imageUrl}}
                        style={{
                            height:300,
                            width:300,
                            alignSelf:"center"
                            ,borderRadius:5
                        }}
                   />
                  

                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginHorizontal:20,
                       marginTop:30,
                       marginLeft:34
                   }}>
                       
                       <View>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:25
                           }}>{datapress.title} </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#696969"
                           }}>
                             {datapress.place}
                           </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#696969"
                           }}>
                             {datapress.type}
                           </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#696969"
                           }}>
                             {datapress.Mob}
                           </Text>
                           <Text style={{
                          fontWeight:"bold",
                          fontSize:28,
                          marginLeft:200,
                          marginTop:-50
                      }}>₹ {datapress.rent}</Text>
                       </View>
                       <View>
                      
                       </View>
                      
                   </View>
                 
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20,
                       marginLeft:34
                   }}>
                       Details
                   </Text>
                   <Text style={{
                       color:"#696969",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:10,
                       marginHorizontal:20,
                       textAlign:"justify",
                       marginLeft:34
                   }}>
                      {datapress.other}



                       
                   </Text>

                

                  
               </ScrollView>
              
            </View>
            
            </Container>
        )
    }

//AppRegistry.registerComponent('Detail',()=>Detail);

const styles = StyleSheet.create({
 
    
    listView: {
      width: '95%',
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'grey',
      borderRadius: 5,
      marginLeft:8,marginRight:8,
      

  },
  
  });