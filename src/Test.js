import React from 'react'
import {
    
    View,
    Image,
    TouchableOpacity, 

    Text} from 'react-native'

    function Cre(props) {
    const  Tes= async () => {
     
        props.navigation.navigate('CreateAccount')
        }
        return(
            <view>
                  <Text>HBHS</Text>
                </view>
          
        );

    }export default Cre ;
/*export default class Test extends React.Component{
    render(){   
        return(
            <view>
                  <Text>HBHS</Text>
                </view>
          
        );
    }
}*/


