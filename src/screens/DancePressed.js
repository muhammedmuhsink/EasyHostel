import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {updateDanceMove, deleteDanceMove} from '../../controller/danceController'
// import Footer from "../footer/Footer"
// import {blackish, orangeish} from '../../colors/Color'


export default function DanceList({ route, navigation }){

    const [name, setName] = useState("")
    const [link, setLink] = useState("")

    function peachPressed(){
        const dance = {
            "id" : route.params.danceMove.id,
            "name" : name,
            "link" : link 
        }

        updateDanceMove(dance, updateComplete)
    }

    function updateComplete(){
        navigation.navigate("WelcomePage")
    }


    function deletePressed(){
        Alert.alert("Are you sure", "You will lose the data", [{text : "Cancel", onPress : () => console.log("delete canceled")},
    {text : "OK", onPress: () => {deleteDanceMove(route.params.danceMove, deleteComplete)}}
    ])
    }

    function deleteComplete(){
        navigation.navigate("WelcomePage")
    }    



    return(
        <View style={styles.content}>
            <KeyboardAwareScrollView
            enableOnAndroid={true}
            scrollEnabled={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{paddingTop : 10}}
            >
            <Text  style={styles.textForInput}>{route.params.danceMove.name}</Text>
            <View>
            <TextInput style={styles.textInput}
                                    placeholder="Name" 
                                    placeholderTextColor={blackish}
                                    value={name}
                                    onChangeText={text => setName(text)}
                                    />
            </View>
            <View style={styles.imageView}>
                <Image source={{uri : route.params.danceMove.link}} style={styles.image} resizeMode="stretch"/>
            </View>
            <View>
            <TextInput style={styles.textInput}
                        placeholder="Link" 
                        placeholderTextColor={blackish}
                        value={link}
                        onChangeText={text => setLink(text)}
                    />
            </View>
            <View style={styles.row}>
            <TouchableOpacity onPress={() => peachPressed()}>
                    <View style={styles.loginView}>
                    <Text style={styles.textHeadlineTwo}>🍑</Text>
                    </View>
                </TouchableOpacity>           
                <TouchableOpacity onPress={() => deletePressed()}>
                    <View style={styles.loginView}>
                    <Text style={styles.textHeadlineTwo}>🤯</Text>
                    </View>
                </TouchableOpacity>
                </View>

                
            </KeyboardAwareScrollView>
            <View style={styles.footer}>
            <Footer signOut={() =>navigation.goBack()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row : {
        flexDirection :"row",
        justifyContent : "space-evenly",
        alignItems : 'center',
    },
    content : {
        flex : 1,
        justifyContent : "space-evenly",
        alignItems : 'center',
        backgroundColor : orangeish
    },
    footer : {
        position: 'relative',
        bottom:0,
        width : 400
    },
    image: {
        width : 350,
        height : 200, 
        borderWidth : 2,
        borderColor : blackish,
        borderRadius : 20
    },
    textInput: {
        width : 300,
        height: 50,
        borderWidth: 1.5,
        borderRadius : 20,
        borderColor : blackish,
        margin : 20,
        textAlign : 'center',
        alignSelf :'center'
    },
    textForInput : {
        fontSize : 20,
        alignSelf : 'center',
        fontWeight : "600"
    },
    imageView :{
        padding: 10
    },
    loginView : {
        margin: 10,
        backgroundColor : blackish,
        width : 150,
        height : 95,
        borderWidth : 3,
        borderColor : orangeish,
        borderRadius : 25,
        alignSelf : 'center'
    }  ,
    textHeadlineTwo : {
        fontSize : 50,
        alignSelf : 'center',
        fontWeight : "700", 
        margin : 10
    }, 
})