import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const { Firestore } = firebase.firestore;

firebase.initializeApp({
    apiKey: "AIzaSyAmRoCnt1Tx9e1L_jDgar3vGcnu3fPs52E",
    authDomain: "adagio-e8cc0.firebaseapp.com",
    projectId: "adagio-e8cc0",
    storageBucket: "adagio-e8cc0.appspot.com",
    messagingSenderId: "658920898918",
    appId: "1:658920898918:web:a1b205345b54958dda08a7"
});

const db:firebase.firestore.Firestore = firebase.firestore();

export default db;