import React from 'react';
import SignIn from './src/Auth/index';
import OTP from './src/Auth/Otp';
import Main from './src/Auth/Main';
import Detail from './src/components/Detail'
import OwnerMain from './src/screens/OwnerMain'
import Addmodule from './src/components/addmodule'
import Mobile from './src/Auth/index';

import Imagepicke from './src/components/Imagepicke'
import {retrieve} from  './src/components/addretrieve'
import {adddata} from  './src/components/addretrieve'
import {getdatas} from  './src/components/addretrieve'
import {getuserdatas} from  './src/components/addretrieve'
import CreateAccount from './src/screens/CreateAccount';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HostelModule from './src/components/HostelModule';
import ListItem from './src/ListItem'
import Owner from './src/screens/Owner'
import Product from './src/Product'
import Product1 from './src/Product1'
import Detail1 from './src/components/Detail1';
import Notification from './src/Notification';
import ListItem1 from './src/ListItem1';
import ListItem2 from './src/ListItem2';
import Searchbar from './src/components/Searchbar';
import Test from './src/components/Test';
import T from './src/components/T'
const AuthStack= createAppContainer(
 
  createStackNavigator(
    {
      SignIn:SignIn,
      OTP : OTP,
      Mobile:Mobile,
      CreateAccount:CreateAccount,
      Main:Main,
      Detail:Detail,
      OwnerMain:OwnerMain,
      Addmodule:Addmodule,
      Imagepicke:Imagepicke,
      retrieve:retrieve,
      adddata:adddata,
      getdatas,getdatas,
      HostelModule:HostelModule,
      ListItem:ListItem,
      ListItem1:ListItem1,
      Owner:Owner,
      Product:Product,
      getuserdatas:getuserdatas,
      Product1:Product1,
      Detail1:Detail1,
      Notification:Notification,
      ListItem2:ListItem2,
      Searchbar:Searchbar,
      Test:Test,
      T:T,

     // Product:Product
     
    },
    {
     headerMode: "none",
     initialRouteName: "SignIn"

    }
  )
);


const App = () => {
  return(
    
     <AuthStack />
 
    
    
  )
};

export default App;
/*
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './src/Navigator'

const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  )
}
export default App;*/
