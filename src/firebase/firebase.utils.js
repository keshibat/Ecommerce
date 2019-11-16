import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwiiJiYMhNeElEefvwltuw2XPSMGpMHmA",
  authDomain: "ecommerce-db-9b526.firebaseapp.com",
  databaseURL: "https://ecommerce-db-9b526.firebaseio.com",
  projectId: "ecommerce-db-9b526",
  storageBucket: "ecommerce-db-9b526.appspot.com",
  messagingSenderId: "377865466011",
  appId: "1:377865466011:web:f54c588bc20d0a1bcb563e",
  measurementId: "G-L0GPF8EH4Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const sighnInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
