import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcNeqotzFj_FZFGxmucTE1J4h2yOv4HVU",
    authDomain: "netflix-clone-d9df3.firebaseapp.com",
    projectId: "netflix-clone-d9df3",
    storageBucket: "netflix-clone-d9df3.appspot.com",
    messagingSenderId: "1070647578874",
    appId: "1:1070647578874:web:5ed0ac117007bd42e8b943"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;