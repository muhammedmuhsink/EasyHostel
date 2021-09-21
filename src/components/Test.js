import  React, {Component,useState,useEffect}from 'react';
import {AppRegistry,View,Image, Text,StyleSheet, StatusBar,FlatList,TextInput,TouchableOpacity} from 'react-native'
import {Button,Right} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import {getuserSearchdatas} from '../components/addretrieve'
import { ScrollView } from 'react-native-gesture-handler'
import Product1 from '../Product1';

export default function Test(props) {
    const [danceList, setDanceList] = useState('')
   
    const [search, setSearch] = useState()
      
      const userdata  = props.navigation.getParam('userdata');

   
     var abc={
        "search":search,

     }
    

      function getData(){
        //     var ret = {
        //       "numb":numb
        //       "usertype":usertype,
        
        //   }
      
            getuserSearchdatas(danceRetrived,abc)
        
        
        console.log("test")
        // if(userdata.typee=='All') {
        //     getuserAlldatas(danceRetrived,userdata)
        // }
        
        // if(typee=='Houses'){
        //     getuserdatas(danceRetrived,userdata);
        //     console.log("test")
         
        // }
        
        // if(typee=='Hostels') {
            
        //      getuserHostelsdatas(danceRetrived,userdata)
        // }
        // if(typee=='Paying Guest') {
          
        //      getuserPayingdatas(danceRetrived,userdata)
        // }
           
        
        
           
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
        <View style={styles.search}>
        <TouchableOpacity >
        <TextInput placeholder="Search here.."
             onChangeText={(value) => setSearch(value)}
             value={search}
        />
        
        <Button  transparent style={styles.custom}   >
     <Icon name="search1" color="black" size={26} onPress={getData}/>
     </Button>
       
        </TouchableOpacity>
        
    
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

    



    </ScrollView>
       
    );

}

AppRegistry.registerComponent('Main',() =>Main);


const styles = StyleSheet.create({
    search: {
        paddingHorizontal:15,
        marginTop :StatusBar.currentHeight,
        backgroundColor:"white",
        borderWidth:2,
        borderRadius:15,
        marginLeft:8,
        width:"95%"
        
       
    },
    flatList  : {
        backgroundColor : "white",
        height : "100%",
        paddingTop : 10,
        paddingBottom : 100,
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
