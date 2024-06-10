import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCp_DEImpsoc5lD2iqLvNQBWboKZQS6dms",
    authDomain: "drive-clone-30e43.firebaseapp.com",
    projectId: "drive-clone-30e43",
    storageBucket: "drive-clone-30e43.appspot.com",
    messagingSenderId: "177292931150",
    appId: "1:177292931150:web:32ca646e6d8b692df3131f"
  };
  
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const storage = firebase.storage();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export {db,storage,auth,provider}