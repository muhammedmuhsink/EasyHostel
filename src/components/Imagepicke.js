import React,{useState, useContext,createContext} from 'react';
import {
    
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity, 
    Text,
    Platform,
    Alert,
    ActivityIndicator,
    AddImage,Image
  
} from 'react-native'

import { imageadd } from './addretrieve';

//import ImageView from 'react-native-image-view';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {Button,Right} from 'native-base'
//import Icon from 'react-native-vector-icons/AntDesign'
import firestore from '@react-native-firebase/firestore';

import storage from '@react-native-firebase/storage';
import {
  InputField,
  InputWrapper,
 
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/AddPost';
// import { CreateAccount } from '../screens/CreateAccount';

export const ImageContext = createContext();
const  Imagepicke=(props)=>{
  // const {user, logout} = useContext(CreateAccount);
  const numb  = props.navigation.getParam('numb');
  const username  = props.navigation.getParam('username');
  const usertype  = props.navigation.getParam('usertype');
  const title  = props.navigation.getParam('title');

 
  const [imageprint, setImageprint] = useState();
  const [image, setImage] = useState([]);
  const [imagepass, setpass] = useState();
  const [x, setim] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

 
      const   Takephotofromgalary = async()=>{

        setLoading(true)
        ImagePicker.openPicker({
            
          }).then((image) => {
            console.log(image);
            const imageUri =image;
             setImage(imageUri);
             console.log("path",image.path)
            
             const myJSON3 = JSON.stringify(image.path);
        setImageprint(myJSON3)
        setLoading(false)
          });
        
         
        }
        console.log("real path",imageprint)
        
         const  Takephotofromcamera = async()=>{

            ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
              }).then((image) => {
                console.log(image);
                const imageUri = image;
                 setImage(imageUri);
               console.log("ss",image.path)
               const myJSON3 = JSON.stringify(image.path);
               setImageprint(myJSON3)
              });


              
             
        }
      
        //  let t=image.path;
        //  console.log(t)
        // const myJSON1 = JSON.stringify(t);

        // console.log(myJSON1)
        const submitPost = async () => {
            const imageUrl = await uploadImage();
            var add1 = {
              "Title" : title,
              "numb":numb,
              "usertype":usertype,
              "imageUrl":imageUrl
          }

            
            imageadd(add1)

            let s=imageUrl;
            const myJSON = JSON.stringify(s);
          console.log("testima",myJSON);
          setpass(myJSON);
          console.log('Posttttt: ', imagepass);
            console.log('Image Url: ', imageUrl);
            console.log('Post: ', post);
        
            firestore()
            .collection('posts')
            .add({
              userId: "login",
              post: post,
              postImg: imageUrl,
              postTime: firestore.Timestamp.fromDate(new Date()),
              likes: null,
              comments: null,
            })
            .then(() => {
              console.log('Post Added!');

              
              Alert.alert(
                'Post published!',
                'Your post has been published Successfully!',
                props.navigation.navigate('OwnerMain',{'imageurl':imageUrl})
              );
              setPost(null);
            })
            .catch((error) => {
              console.log('Something went wrong with added post to firestore.', error);
            });
          }


          const uploadImage = async () => {

              if( image == null ) {
                return null;
              }
            
              let uploadUri = image;
              //console.log(image.path);
              let c= image;
              let v=c.toString();
              console.log(v);
              console.log(v.lastIndexOf('/'));
              let filename = v.substring(v.lastIndexOf('/') + 1);
          
          let x=(image.path);
            const myJSON = JSON.stringify(x);
          console.log("vss",myJSON);
            setim(myJSON);
              // Add timestamp to File Name
              const extension = filename.split('.').pop(); 
              const name = filename.split('.').slice(0, -1).join('.');
              filename = name + Date.now() + '.' + extension;
      
              setUploading(true);
              setTransferred(0);
          
              const storageRef = storage().ref(`photos/${filename}`);
              const task = storageRef.putFile(uploadUri.path);
          
              // Set transferred state
              task.on('state_changed', (taskSnapshot) => {
                console.log(
                  `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
                  
                );
               
                setTransferred(
                  Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
                    100,
                );
              });
          
              try {
                await task;
          
                const url = await storageRef.getDownloadURL();
              
                setUploading(false);
                setImage(null);
                console.log(image);
          
                // Alert.alert(
                //   'Image uploaded!',
                //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
                // );
                
                return url;
          
              } catch (e) {
                console.log(e);
                return null;
              }
          
            };

          
        

    
        return(
  


  
<View style={styles.panel}>
       

      <View style={{alignItems: 'center',marginTop:-160}}>
          <View style={{alignItems: 'center',marginTop:-150}}> 
          <Image style={{alignItems: 'center',marginTop:500}}
                       source={{uri:imageprint}}
                        style={{
                            height:300,
                            width:300,
                            alignSelf:"center",
                           
                        }}
                   />

          </View>


     
         
      </View>
     <View>

       <Text>       </Text>
    </View>
      
      <TouchableOpacity style={styles.panelButton} onPress={Takephotofromcamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={Takephotofromgalary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
         style={styles.panelButton}
         onPress={submitPost}>
        <Text style={styles.panelButtonTitle}>Next</Text>
      </TouchableOpacity>
     
    </View>
               
                // {/* <TouchableOpacity
                                  
                //                   onPress={Takephotofromcamera}
                                   
                //                     style={[styles.listView,{backgroundColor:'#483D8B'}]}>
                //                     <Text style={{
                //                         color: 'seashell',
                //                         fontSize: 15,
                //                         fontWeight: 'bold'
                //                     }}>
                //                         Take Photo</Text>
                //                 </TouchableOpacity>
                //                 <TouchableOpacity
                //                   onPress={Takephotofromgalary}
                                   
                //                   style={[styles.listView1,{backgroundColor:'#483D8B'}]}>
                //                   <Text style={{
                //                       color: 'seashell',
                //                       fontSize: 15,
                //                       fontWeight: 'bold'
                //                   }}>
                //                       Choose from Galary</Text>
                //               </TouchableOpacity>
                //               <TouchableOpacity
                                  
                                   
                //                   style={[styles.listView1,{backgroundColor:'#483D8B'}]}>
                //                   <Text style={{
                //                       color: 'seashell',
                //                       fontSize: 15,
                //                       fontWeight: 'bold'
                //                   }}>
                //                       Cancel</Text>
                //               </TouchableOpacity> */}

            
            
            
        );
    }
    export default Imagepicke;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        height:50,
        backgroundColor:'white',
        borderRadius:8
 
       
    },
    SearchInput:{
        width:"100%",
        height:"100%",
        paddingLeft:8,
        fontSize:16

    },
    custom:{
        marginLeft:280,
        marginTop:-46
    },
    listView: {
        width: '95%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: 5,
        marginTop:280,
        marginLeft:9,marginRight:8
    },
    listView1: {
        width: '95%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: 5,
        marginTop:15,
        marginLeft:9,marginRight:8
    },
    listView3: {
        width: '95%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: 5,
        marginTop:10,
        marginLeft:9,marginRight:8
    },
    im:{
        marginTop:50,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop:400,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
})