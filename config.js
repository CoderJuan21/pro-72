import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDgiCOUmtfKFPUM6HZDsEa-8fvxj0CypoE",
    authDomain: "storyhub-51c9b.firebaseapp.com",
    databaseURL: "https://storyhub-51c9b-default-rtdb.firebaseio.com",
    projectId: "storyhub-51c9b",
    storageBucket: "storyhub-51c9b.appspot.com",
    messagingSenderId: "831292028086",
    appId: "1:831292028086:web:424aa3a9f574d903d02217"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();