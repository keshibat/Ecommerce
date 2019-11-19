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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const sighnInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
