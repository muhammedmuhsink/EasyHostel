import React,{Component,useState} from 'react'
import {    
    View,Text,
    Image,
    TouchableOpacity, 
    TextInput,
    AppRegistry, StyleSheet} from 'react-native'
    import Icon from 'react-native-vector-icons/AntDesign'
    import Imagepicke from '../components/Imagepicke'

    import {Picker} from '@react-native-picker/picker';

import { Header,Container, Title,Body,Button, Left,Right } from 'native-base';
import { ScrollView } from 'react-native';

import Placesearch from 'react-native-placesearch';
import Geocoder from 'react-native-geocoder';
import color from 'color';
import firestore from '@react-native-firebase/firestore';
import { adddata } from './addretrieve';



function  Addmodule(props)  {


  const numb  = props.navigation.getParam('numb');
  const username  = props.navigation.getParam('username');
  const usertype  = props.navigation.getParam('usertype');
  
  const [title, setTitle] = useState('')
  const [ rent, setRent ] = useState("");
  const [ contact, setContact ] = useState("");
  const [ other, setOther ] = useState("");
  const [ place, setPlace ] = useState("");
  const [ type, setType ] = useState("");
  const submidata3= async()=>
  {
    var add = {
      "Title" : title,
      "Rent" : rent,
      "Mob" : contact,
      "Other" : other,
      "numb":numb,
      "username":username,
      "usertype":usertype,
      "place":place,
      "type":type
  }
  

  adddata(add)


  }

  
  
      
    
 
  
        return(
            <Container >
            <Header style={styles.head}>
                <Left>
                <Button transparent  iconLeft>
              <Icon name="arrowleft" color="#FFFFFF" size={26}onPress={() => props.navigation.goBack(null)} />
              </Button>
                </Left>
                <Body>
               <Title>Create Modules</Title>
              </Body>   
             
              
            </Header>
           
          <View   >
         {/* <Placesearch 
    apikey="AIzaSyDTD0aftQAe3RFGpUdw7fGNsaw2SOQx_-E" // required *
    SelectedAddress={(data)=>console.log(data)} // required *
     country ="in" //optional
    // coordinate={true} //optional
    // removeImg = {true} //optional
    // InputContainer = {{'your style goes here'}} //optional
    // MainContainer = {{'your style goes here'}} //optional
    // ListStyle = {{'your style goes here'}} //optional
    // ListTextStyle = {{'your style goes here'}} //optional
    // ListIconStyle = {{'your style goes here'}} //optional
    // ImgStyle = {{'your style goes here'}} //optional
    // Img = {{'your style goes here'}} //optional
    // textInput = {{'your style goes here'}} //optional
    // placeHolder = {{'type any textInput placeholder as you like'}} //optional
    /> */}
          </View>
            <ScrollView>
            <TextInput
                                    style={styles.inputtext}
                                    placeholder='Enter Title *'
                                    placeholderTextColor="#696969" underlineColorAndroid={'transparent'}
                                    keyboardType="default"
                                    placeh
                                    onChangeText={(value) => setTitle(value)}
                                    value={title}
                                    
                                  
                                />
                                 <TextInput
                                    style={styles.inputtext}
                                    placeholder='Enter place *'
                                    placeholderTextColor="#696969" underlineColorAndroid={'transparent'}
                                    keyboardType="default"
                                    placeh
                                    onChangeText={(value) => setPlace(value)}
                                    value={place}
                                    
                                  
                                />
                                  <View style={{
                       width:"100%",
                       alignItems:"center",
                      
                   }}>
                       <Picker style={{height:50,width:350}}
                        selectedValue={type}
                        
                        onValueChange={(itemValue)=>setType(itemValue)}
                        itemValue={type}  
                        
                       >
                            <Picker.Item
                            label="All"
                            value="All"
                            style={{fontWeight:"bold"}}
                           />
                           <Picker.Item
                            label="Hostel"
                            value="Hostel"
                            style={{fontWeight:"bold"}}
                           />
                            <Picker.Item
                            label="Paying Guest"
                            value="Paying Guest"
                            style={{fontWeight:"bold"}}
                           />
                            <Picker.Item
                            label="House"
                            value="House"
                            style={{fontWeight:"bold"}}
                           />
                          
                       </Picker>
                   </View>

                                
                                 <TextInput
                                    style={styles.inputtext}
                                    placeholder='Rent per month *'
                                    placeholderTextColor="#696969" underlineColorAndroid={'transparent'}
                                    keyboardType="numeric"
                                    onChangeText={(value) => setRent(value)}
                                    value={rent}
                                  
                                />
                                 <TextInput
                                    style={styles.inputtext}
                                    placeholder='contact Number *' 
                                    placeholderTextColor="#696969" underlineColorAndroid={'transparent'}
                                    keyboardType="numeric"
                                    multiline={true}
                                    onChangeText={(value) => setContact(value)}
                                    value={contact}
                                />
                              <TextInput
                                    style={styles.inputtext}
                                    placeholder='other details'
                                    placeholderTextColor="#696969" underlineColorAndroid={'transparent'}
                                    keyboardType="default"
                                    multiline={true}
                                    onChangeText={(value) => setOther(value)}
                                    value={other}
                                />
                              
                                <TouchableOpacity 
                                  onPress={submidata3}
                                  onPressOut={() =>props.navigation.navigate('Imagepicke',{'numb':numb,'username':username,'usertype':usertype,"title":title})}
                                   
                                    style={[styles.listView,{backgroundColor:'#483D8B'}]}>
                                    <Text style={{
                                        color: 'seashell',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>Next</Text>
                                </TouchableOpacity>






                       

                                </ScrollView>
          
           
          </Container>
          
        );
    }
export default Addmodule;
//AppRegistry.registerComponent('Product',()=>Product);

const styles = StyleSheet.create({
 
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textBoxAndInputBox: {
    flex: 1, 
    flexDirection: "column",
    justifyContent: "space-between",

  },
  listView: {
    width: '95%',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop:160,
    marginLeft:9,marginRight:8
},
inputtext:{
  marginBottom: 20, color: '#473F3D', width: '93%',
  borderBottomColor: '#16100F', borderBottomWidth: 1,marginLeft:10,
},
head: {
  backgroundColor:"#5060C4"
  
},
});