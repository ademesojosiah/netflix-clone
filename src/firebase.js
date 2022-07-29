import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDu5Ocj_0aY4L11jpA3R-TnyFafVfQYLec",
    authDomain: "netflix-clone-5b196.firebaseapp.com",
    projectId: "netflix-clone-5b196",
    storageBucket: "netflix-clone-5b196.appspot.com",
    messagingSenderId: "856603935346",
    appId: "1:856603935346:web:905928366a9c52e96e38eb"
  };


 const firebaseApp = firebase.initialize(firebaseConfig);
 const db = firebase.firestore();
 const auth = firebase.auth()

 export {auth} ;
 export default db;