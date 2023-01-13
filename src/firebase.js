import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-b8FvO0zmzQ8PvLBqvC5kQjFuzphFLso",
    authDomain: "copy-42876.firebaseapp.com",
    projectId: "copy-42876",
    storageBucket: "copy-42876.appspot.com",
    messagingSenderId: "1079285885886",
    appId: "1:1079285885886:web:dc3b6728850cd1252767ef",
    measurementId: "G-B8JNG72CVF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };