import firebase from 'firebase'
import "firebase/firestore";
var config ={
    apiKey:'AIzaSyDNdcpf4K6yWOUWsAVE1rOI5NfPSQanvqY',
    authDomain: 'rnfirebXXX-XXXX.firebaseapp.com',
    databaseURL: 'https://easyhostel-3414e-default-rtdb.firebaseio.com/',
    projectId: 'easyhostel-3414e',
    storageBucket: 'easyhostel-3414e.appspot.com',
    messagingSenderId: '601090409453',
    appId:'1:601090409453:android:4df19a2fee573398309de4'
  };
  const app = firebase.initializeApp(config);
 export const db = firebase.firestore(app);
 export {firebase};
