import { Container } from 'native-base'
import React from 'react'
import {View,Text, Image,AppRegistry,StyleSheet,TextInput,Alert} from 'react-native'
import {
    ScrollView,
    TouchableOpacity} 
    from 'react-native-gesture-handler'

    import {pressdetaildata} from '../components/addretrieve'
//import Icon from '@expo/vector-icons/Entypo'


export default function Detail1(props){

    const datapress  = props.navigation.getParam('datapress');
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
    const pressdetail = async () => {
        Alert.alert(
            'Apply module',
            'Do you want to Apply ...',
            [
              {text: 'NO'},
              {text: 'YES', onPress: () =>pressdetaildata(datapress) },
            ]
          );
       
        
    }
   
        return(
            <Container style={{backgroundColor:"#E0E0E0"}}>
            <View style={{backgroundColor:"#FFF"},{marginTop:5}}>
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
                           }}>{datapress.place}
                           </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#696969"
                           }}>
                             {datapress.usertype}
                           </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#696969"
                           }}>
                             {datapress.Mob}
                           </Text>
                       </View>
                       <View>
                      
                       </View>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:28,
                          marginLeft:80
                      }}>₹ {datapress.rent}</Text>
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

                   <View >
                 <TouchableOpacity
                                  
                                  onPress={pressdetail}
                                   onPressOut={() => props.navigation.navigate('Main')}
                                  style={[styles.listView,{backgroundColor:'#483D8B'}]}>
                                  <Text style={{
                                      color: 'seashell',
                                      fontSize: 15,
                                      fontWeight: 'bold'
                                  }}>
                                      Apply</Text>
                              </TouchableOpacity> 
               </View>
               </ScrollView>
              
            </View>
            
            </Container>
        )
    }

//AppRegistry.registerComponent('Detail',()=>Detail);

const styles = StyleSheet.create({
 
    
    listView: {
      width: '90%',
     
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'grey',
      borderRadius: 5,
      marginLeft:20,marginRight:8,
      marginTop:30
      

  },
  
  });