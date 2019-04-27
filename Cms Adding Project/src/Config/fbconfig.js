import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDkmPAD62V1AhzUaYYmBcS7XQGD1JoJEpw",
    authDomain: "letscript-b92f6.firebaseapp.com",
    databaseURL: "https://letscript-b92f6.firebaseio.com",
    projectId: "letscript-b92f6",
    storageBucket: "letscript-b92f6.appspot.com",
    messagingSenderId: "221014601577"
  };
 firebase.initializeApp(config);
 firebase.firestore().settings({ timestampsInSnapshots: true });

 export default firebase;
 