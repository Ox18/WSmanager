import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

firebase.initializeApp({ });

const db: firebase.firestore.Firestore = firebase.firestore();

export default db;
