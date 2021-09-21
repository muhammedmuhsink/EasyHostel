import Mobile from './src/Auth/index';
import OTP from './src/Auth/otp';
//import Home1 from './src/Auth/main'
import CreateAccount from './src/Auth/CreateAccount';
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/CreateAccount';


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}
const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="index">
            <Stack.Screen name="index" component={Mobile}/>
            <Stack.Screen name="OTP" component={OTP}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount}/>
            

        </Stack.Navigator>
    )
}
export default HomeStackNavigator;