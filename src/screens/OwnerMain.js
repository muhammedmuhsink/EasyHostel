import  React, {Component,useState,useEffect,createContext} from 'react';
import {AppRegistry,View,Image, Text,StatusBar, StyleSheet,TextInput,ScrollView,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
//import { Icon } from 'react-native-elements'
import {getdatas} from '../components/addretrieve'
import HostelModule from '../components/HostelModule';
import Addmodule from '../components/addmodule';
import ListItem from '../ListItem'
import { Header,Container, Title,Body, Button,Left,Right } from 'native-base';
// export const useContext1=React.createContext()
function OwnerMain (props) {
 // console.log(props)
  const [danceList, setDanceList] = useState()
  const numb  = props.navigation.getParam('numb');
  const username  = props.navigation.getParam('username');
  const usertype  = props.navigation.getParam('usertype');


  
// componentWillMount()
// {
//   getData()
// }

  function getData(){
    var ret = {
      "numb":numb,
      "usertype":usertype,
  }

  getdatas(danceRetrived,ret);
   console.log("test")
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
// componentWillMount(){
//   this._subscribe = this.props.navigation.addListener('didFocus', () => {
//    this.LoadData();
//    //Put your Data loading function here instead of my this.LoadData()
//   });}
      
     
      return(
          <Container>

              {/* <useContext1.Provider value={"number"}>
                <Addmodule/>
                </useContext1.Provider>  */}
            <View >
  
            <Header style={StyleSheet.head} >
              <Left>
              <Button transparent  iconLeft >
            <Icon name="menuunfold" color="#FFFFFF" size={26}   />
            </Button>
              </Left>
              <Body>
             <Title>Hostel Owner</Title>
            </Body>
            <Right>
            <Button transparent >
                <Icon name="bells" color="#FFFFFF" size={26}  onPress={() => props.navigation.navigate('Notification',{'numb':numb,'username':username,'usertype':usertype} )}/>
            </Button>
            <Button transparent >
                <Icon name="plus" color="#FFFFFF" size={26}  onPress={() => props.navigation.navigate('Addmodule',{'numb':numb,'username':username,'usertype':usertype})}  />
            </Button>
            
            </Right>
            
          </Header>
            </View>
            
  
             <View style={styles.content} >
                       <FlatList style={styles.flatList}
                          data = {danceList}
                          keyExtractor={(item) => item.id}
                          renderItem={({item}) => 
                          <ListItem item={item} navigation={props.navigation}
                         
                          /> }
                          />
              {/* <View style={styles.footer}>
                  <Footer signOut={() => navigation.goBack()}/>
              </View> */}
          </View>
          
   
           {/* <View>
           <HostelModule
                             //image={require("../Assets/black.jpg")}
                              title="Honey Chilli"
                              price="10.99"
                              marginTop={25}
                              
                         />
  
           </View> */}
           
        </Container>
           
  
      );
      }
      export default OwnerMain ;
  
  
      const styles = StyleSheet.create({
        head: {
                backgroundColor:"black"
                
        },
  
        flatList  : {
          backgroundColor : "white",
          height : "90%",
          paddingTop : 5,
          paddingBottom : 5,
          paddingLeft :  10,
          paddingRight : 10,
          marginBottom : 40,
          
          borderRadius : 10,
          margin : 5
      },
      footer : {
          position: 'relative',
          bottom:0
      },
      content : {
          paddingTop : 1,
          backgroundColor : "white"
      },
       
    })