import React,{Component,useState,useEffect,createContext} from 'react';
import {AppRegistry,View,Image, Text,StatusBar, StyleSheet,TextInput,ScrollView,FlatList} from 'react-native'
import {orangeish} from "../colors/Color"
import {Deletepress} from './components/addretrieve'
import { addpressdata } from './components/addretrieve';
import Detail from './components/Detail';
import { Header,Container, Title,Body,Button, Left,Right } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
import {getNotdatas} from './components/addretrieve'
import ListItem2 from './ListItem2';
// import { ImageContext } from '../src/components/Imagepicke';
function Notification (props){
 
    const [danceList, setDanceList] = useState()
    const numb  = props.navigation.getParam('numb');
    const username  = props.navigation.getParam('username');
    const usertype  = props.navigation.getParam('usertype');
    
    function getData(){
        var ret = {
          "numb":numb,
          "usertype":usertype,
      }
    
    getNotdatas(danceRetrived,ret);
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

    // var datapress={
    //      'title': props.item.Title,
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
        <Container >
            <View>

            <Header style={styles.head}>
                <Left>
                <Button transparent  iconLeft>
              <Icon name="arrowleft" color="#FFFFFF" size={26}onPress={() => props.navigation.goBack(null)} />
              </Button>
                </Left>
                <Body>
               <Title>Notification</Title>
              </Body>   
             
              
            </Header>
            </View>

            <View style={styles.content} >
                       <FlatList style={styles.flatList}
                          data = {danceList}
                          keyExtractor={(item) => item.id}
                          renderItem={({item}) => 
                          <ListItem2 item={item} navigation={props.navigation}
                         
                          /> }
                          />
             
          </View>
           
           
            </Container>



            
            /* <View>
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
        </View>  */
        
    
    

    // <TouchableOpacity onPress={props.onPress}>{content}></TouchableOpacity>
    );
}

export default Notification; 

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
        
        
    },
    head: {
        backgroundColor:"#5060C4"
        
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

});
