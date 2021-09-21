import  React, {Component,useState,useEffect} from 'react';
import {AppRegistry,View,Image, Text,StatusBar, StyleSheet,TextInput,ScrollView,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
//import { Icon } from 'react-native-elements'
import getDanceMoves from '../components/addretrieve'
import HostelModule from '../components/HostelModule';
import { Header,Container, Title,Body, Button,Left,Right } from 'native-base';
function Owner () {
  
  
 
// getData=()=>
//   {
//     getDanceMoves(danceRetrived)
//   }
//   danceRetrived=(danceList)=>
//   {
//     setDanceList(danceList)
//   }

//  danceRetrived(danceList){
//     setDanceList(danceList)
// }
   

    //   useEffect(()=> {
    //     getData()
    // })

    
   
    return(
        <Container>
          <View >

          <Header style={StyleSheet.head} >
            <Left>
            <Button transparent  iconLeft >
          <Icon name="menuunfold" color="#FFFFFF" size={26} />
          </Button>
            </Left>
            <Body>
           <Title>Hostel Owner</Title>
          </Body>
          <Right>
          <Button transparent >
              <Icon name="plus" color="#FFFFFF" size={26}  onPress={() => this.props.navigation.navigate('addmodule')}  />
          </Button>
          </Right>
          
        </Header>
          </View>

          {/* <View style={styles.content}>
                     <FlatList style={styles.flatList}
                        data = {danceList}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => 
                        <ListItem item={item}
                        onPress={()=> navigation.navigate("DancePressed", {danceMove : item})}
    /> }
                        />
            <View style={styles.footer}>
                <Footer signOut={() => navigation.goBack()}/>
            </View>
        </View>
         */}

         <View>
         <HostelModule
                           //image={require("../Assets/black.jpg")}
                            title="Honey Chilli"
                            price="10.99"
                            marginTop={25}
                       />

         </View>
         
      </Container>
         

    );
    }
    export default Owner ;


    const styles = StyleSheet.create({
      head: {
              backgroundColor:"black"
              
      },

      flatList  : {
        backgroundColor : "black",
        height : "80%",
        paddingTop : 10,
        paddingBottom : 10,
        paddingLeft :  20,
        paddingRight : 20,
        marginBottom : 40,
        borderWidth : 2,
        borderRadius : 20,
        margin : 5
    },
    footer : {
        position: 'relative',
        bottom:0
    },
    content : {
        paddingTop : 30,
        backgroundColor : "yellow"
    },
     
  })