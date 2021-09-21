import  React, {Component,useState,useEffect}from 'react';
import {AppRegistry,View,Image, Text,StyleSheet, StatusBar,FlatList,TextInput} from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import Product from  '../Product'
import ListItem from '../ListItem';
import Detail  from '../components/Detail'
import Searchbar from '../components/Searchbar'
import { SearchBar } from 'react-native-elements';
import {getuserdatas} from '../components/addretrieve'
import {getuserAlldatas} from '../components/addretrieve'
import {getuserHostelsdatas} from '../components/addretrieve'
import {getuserPayingdatas} from '../components/addretrieve'



import {Button,Right} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
//import Cre from './src/Auth/Test'
import Product1 from '../Product1';
import { TouchableOpacity } from 'react-native';
export default function Main (props){
   
    const [danceList, setDanceList] = useState()
   
    const [typee, setTypee] = useState('All')
    const numb  = props.navigation.getParam('numb');
    const username  = props.navigation.getParam('username');
    const usertype  = props.navigation.getParam('usertype');

    var userdata=
    {
        "numb":numb,
      "usertype":usertype,
      "username":username,
      "typee":typee,
      
    }
  
   
    // function SearchPress () {
    //     console.log("pressed")
    // }

  function getData(){
//     var ret = {
//       "numb":numb
//       "usertype":usertype,

//   }
// if(search=='Sreekaryam')
// {
//     console.log("sas")
//     getuserSearchdatas(danceRetrived,userdata)
// }

console.log("test")
if(userdata.typee=='All') {
    getuserAlldatas(danceRetrived,userdata)
}

if(typee=='Houses'){
    getuserdatas(danceRetrived,userdata);
    console.log("test")
 
}

if(typee=='Hostels') {
    
     getuserHostelsdatas(danceRetrived,userdata)
}
if(typee=='Paying Guest') {
  
     getuserPayingdatas(danceRetrived,userdata)
}
   


   
}

useEffect(()=> {

    
    const interval=setInterval(getData,500)
    return()=>{
      clearInterval(interval)
    }
   
     //  getData();
     //  console.log("test")
    
  },[danceList])
    
    function danceRetrived(danceList){
        setDanceList(danceList)
       
      }


      
    
      
    return(
        <ScrollView style={{backgroundColor:"#FFF"}}>
            {/* <View style={{height:40,width:"96%",marginLeft:6 ,marginTop:5,}}>
            <SearchBar  style={{backgroundColor:"#FFF",borderColor:"#FFF"}}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        //value={search}
      />
     
            </View> */}
            
                
                
            <View style={styles.search1} > 
            
                <Searchbar navigation={props.navigation} userdata={userdata}/>
               
                {/* <Button type="primary" shape="circle" icon={<SearchOutlined />} /> */}

               
            </View>
           
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:40,
                   marginHorizontal:20
               }}>
                  
                   <View style={{width:"10%"}}>
                       <Image
                           // source={require('../images/1.png')}
                       />
                       
                       
                   </View>
                   <View style={{
                       width:"80%",
                       alignItems:"center",
                       marginTop:-40
                   }}>
                       <Picker style={{height:50,width:350}}
                        selectedValue={typee}
                        
                        onValueChange={(itemValue)=>setTypee(itemValue)}
                        itemValue={typee}  
                       >
                            <Picker.Item
                            label="All"
                            value="All"
                            style={{fontWeight:"bold"}}
                           />
                           <Picker.Item
                            label="Hostels"
                            value="Hostels"
                            style={{fontWeight:"bold"}}
                           />
                            <Picker.Item
                            label="Paying Guest"
                            value="Paying Guest"
                            style={{fontWeight:"bold"}}
                           />
                            <Picker.Item
                            label="Houses"
                            value="Houses"
                            style={{fontWeight:"bold"}}
                           />
                          
                       </Picker>
                   </View>
                  
               </View>
               
               
               <View style={{
                   paddingHorizontal:20,
                   marginTop:5
               }}>
                   <Text  style={{
                       fontSize:30,
                       fontWeight:"bold"
                   }}>Top most</Text>
                   <Text style={{
                       fontSize:30,
                       fontWeight:"bold"
                   }}>Hostels in your area</Text>
               </View>
               <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginTop:40, marginLeft:15}}


               
               >
                     <View style={{flexDirection: 'row'}}  >
                       <FlatList style={styles.flatList}
                          data = {danceList}
                          keyExtractor={(item) => item.id}
                          numColumns={2}
                          renderItem={({item}) => 
                          <Product1 item={item} navigation={props.navigation} userdata={userdata}
                          
                        /> 
                        }
                          />
              {/* <View style={styles.footer}>
                  <Footer signOut={() => navigation.goBack()}/>
              </View> */}
          </View>

                    
            </ScrollView>
          
                   <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:40
                   }}>
                      
                   </View>
                  
                  
                   <View da style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>

                        {/* <FlatList style={styles.flatList}
                          data = {danceList}
                          keyExtractor={(item) => item.id}
                          renderItem={({item}) => 
                          <Product item={item}
                          //  onPress={()=> navigation.navigate("DancePressed", {danceMove : item})}
                          /> }
                          /> */}
                       {/* <Product
                            //image={require("../images/4.png")}
                            title="Smokehouse"
                            price="12.99"
                            onPress={() => this.props.navigation.navigate('Detail')}
                       /> */}
                      
                   </View>

                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>
                       {/* <Product
                            //image={require("../images/6.png")}
                            title="Adios Pizza"
                            price="11.99"
                       />
                       <Product
                           // image={require("../images/10.png")}
                            title="Burrito"
                            price="10.99"
                            marginTop={2}
                            
                       /> */}
                   </View>
           </ScrollView>
       
    );

}

AppRegistry.registerComponent('Main',() =>Main);


const styles = StyleSheet.create({
    search1: {
        paddingHorizontal:15,
        marginTop :StatusBar.currentHeight,
        backgroundColor:"white",
        borderWidth:2,
        borderRadius:15,
        marginLeft:8,
        flex:1,width:"95%"
        
       
    },
    flatList  : {
        backgroundColor : "white",
        height : "100%",
        paddingTop : 10,
        paddingBottom : 10,
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





  




