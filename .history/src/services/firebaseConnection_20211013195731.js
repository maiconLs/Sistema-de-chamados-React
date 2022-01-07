import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCLNZoDMTxBhdgXOZddtITkVDdzW4vd6gg",
  authDomain: "sistema-4ba7a.firebaseapp.com",
  projectId: "sistema-4ba7a",
  storageBucket: "sistema-4ba7a.appspot.com",
  messagingSenderId: "253849746323",
  appId: "1:253849746323:web:4b426739aaf7f0712d0666"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;