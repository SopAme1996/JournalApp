import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGManFnVoVgXqulnQw49KzaAbu41wJ9TQ",
  authDomain: "journalapp---curso.firebaseapp.com",
  projectId: "journalapp---curso",
  storageBucket: "journalapp---curso.appspot.com",
  messagingSenderId: "224875842981",
  appId: "1:224875842981:web:e284f0c8b50a4ce5be6c4c",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProivder = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProivder,
    firebase
}