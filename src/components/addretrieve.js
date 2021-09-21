import firestore from '@react-native-firebase/firestore';


export function retrieve(){


        firestore()
.collection('login')
.doc('9947611563')
.collection('Hostel Owner')
.doc('CreateModule')
.collection('Modules')
.doc('Bagdhadh')
.get()
.then(documentSnapshot => {
  console.log('User exists: ', documentSnapshot.exists);

  if (documentSnapshot.exists) {
    console.log('User data: ', documentSnapshot.data());
  }

});     
   
}

export function adddata(add){


    firestore()
    .collection('login')
    .doc(add.numb)
    .collection(add.usertype)
    .doc("CreateModule")
    .collection('Modules')
    .doc(add.Title)
    .set(add)
    // .set({
    //     Title: this.state.text,
        
    // })
    
    
    .then(() => {
    console.log('User added!');
    });
}



export async function getdatas(dancesRetrived,ret){
     var danceList = [] 
    firestore()
    .collection('login')
    .doc(ret.numb)
    .collection(ret.usertype)
    .doc("CreateModule")
    .collection('Modules')
    .get()
    
    .then(snapshot => {
      snapshot.forEach((doc) => {
        const danceDoc = doc.data()
         danceDoc.id = doc.id
        danceList.push(danceDoc)
        
    });
    dancesRetrived(danceList)
  })
  
}


export async function getNotdatas(dancesRetrived,ret){
  var danceList = [] 
 firestore()
 .collection('login')
 .doc(ret.numb)
 .collection('Notification')
 .get()
 
 .then(snapshot => {
   snapshot.forEach((doc) => {
     const danceDoc = doc.data()
      danceDoc.id = doc.id
     danceList.push(danceDoc)
     
 });
 dancesRetrived(danceList)
})

}

export async function getuserdatas(dancesRetrived,userdata){
  var danceList = [] 
 firestore()
 .collection('Users')
 .doc('UserModule')
 .collection('ModuleAdd')
 .where('type', 'in', ['House'])
 .get()
 
 .then(Snapshot => {
        Snapshot.forEach((doc) => {
     const danceDoc = doc.data()
      danceDoc.id = doc.id
     danceList.push(danceDoc)
     
 });
 
 dancesRetrived(danceList)
})

}
export async function getuserAlldatas(dancesRetrived,userdata){
  var danceList = [] 
 firestore()
 .collection('Users')
 .doc('UserModule')
 .collection('ModuleAdd')
 .where('type', 'in', ['House','Paying Guest',"Hostel","All"])
 .get()
 
 .then(Snapshot => {
        Snapshot.forEach((doc) => {
     const danceDoc = doc.data()
      danceDoc.id = doc.id
     danceList.push(danceDoc)
     
 });
 
 dancesRetrived(danceList)
})

}
export async function getuserHostelsdatas(dancesRetrived,userdata){
  var danceList = [] 
 firestore()
 .collection('Users')
 .doc('UserModule')
 .collection('ModuleAdd')
 .where('type', 'in', ["Hostel"])
 .get()
 
 .then(Snapshot => {
        Snapshot.forEach((doc) => {
     const danceDoc = doc.data()
      danceDoc.id = doc.id
     danceList.push(danceDoc)
     
 });
 
 dancesRetrived(danceList)
})

}
export async function getuserPayingdatas(dancesRetrived,userdata){
  var danceList = [] 
 firestore()
 .collection('Users')
 .doc('UserModule')
 .collection('ModuleAdd')
 .where('type', 'in', ["Paying Guest"])
 .get()
 
 .then(Snapshot => {
        Snapshot.forEach((doc) => {
     const danceDoc = doc.data()
      danceDoc.id = doc.id
     danceList.push(danceDoc)
     
 });
 
 dancesRetrived(danceList)
})

}

export function imageadd(add1){


  firestore()
  .collection('login')
  .doc(add1.numb)
  .collection(add1.usertype)
  .doc("CreateModule")
  .collection('Modules')
  .doc(add1.Title)
  .set({
    imageUrl: add1.imageUrl
}, { merge: true })
  // .add({
  //     imageUrl: "asmldma"
      
  // })

  .then(() => {
  console.log('User added!');
  });
}

export function addpressdata(datapress){



  firestore()
    .collection('Users')
    .doc('UserModule')
    .collection('ModuleAdd')
    .doc(datapress.title)
    .set(datapress)
    // .set({
    //     Title: this.state.text,
        
    // })
    
    
    .then(() => {
    console.log('User Module Added');
    });

}

export function retrievepressed(datapress){



  firestore()
    .collection('Users')
    .doc('UserModule')
    .collection('ModuleAdd')
    .doc(datapress.title)
    .delete()
    // .set({
    //     Title: this.state.text,
        
    // })
    
    
    .then(() => {
    console.log('User Module Added');
    });

}

export function Deletepress(datapress){

  firestore()
  .collection('login')
  .doc(datapress.num)
  .collection('Hostel Owner')
  .doc("CreateModule")
  .collection('Modules')
  .doc(datapress.title)
  .delete()
  // .set({
  //     Title: this.state.text,
      
  // })
  
  
  .then(() => {
  console.log('User Module Deleted');
  });

  

    firestore()
    .collection('Users')
    .doc('UserModule')
    .collection('ModuleAdd')
    .doc(datapress.title)
    .delete()
    // .set({
    //     Title: this.state.text,
        
    // })
    
    
    .then(() => {
    console.log('User Module Deleted');
    });


}

export function pressdetaildata(datapress){


  firestore()
    .collection('login')
    .doc(datapress.userno)
    .collection('Notification')
    .doc(datapress.username)
    .set(datapress)
    // .set({
    //     Title: this.state.text,
        
    // })
    
    
    .then(() => {
    console.log('User Notification Added');
    });

}


export function DeleteNotificationpress(datapress){

  console.log(datapress.userno)
  firestore()
  .collection('login')
  .doc(datapress.userno)
  .collection('Notification')
  .doc(datapress.username)
  .delete()
  // .set({
  //     Title: this.state.text,
      
  // })
  
  
  .then(() => {
  console.log('User Module Deleted');
  });

  


}


export async function getuserSearchdatas(dancesRetrived,abc){
  var danceList = [] 
 firestore()
 .collection('Users')
 .doc('UserModule')
 .collection('ModuleAdd')
 .where('place', 'in', [abc.search])
 .get()
 
 .then(Snapshot => {
        Snapshot.forEach((doc) => {
     const danceDoc = doc.data()
      danceDoc.id = doc.id
     danceList.push(danceDoc)
     
 });
 
 dancesRetrived(danceList)
})

}