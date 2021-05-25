import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";


var firebaseui = require('firebaseui');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDSZyKfO2x0tvlOyerayHn8a8h4RBFboh4",
  authDomain: "aconlist-b6d29.firebaseapp.com",
  projectId: "aconlist-b6d29",
  storageBucket: "aconlist-b6d29.appspot.com",
  messagingSenderId: "898935671726",
  appId: "1:898935671726:web:b38b42f1c1cefda28e563f",
  measurementId: "G-DQC7327GFZ"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// instance of the Google provider object.
const provider = new firebase.auth.GoogleAuthProvider();

// signIn method which makes use of a pop-up
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};



export const generateUserDocument = async (user, additionalData) => {
  // check if there is data at the specified reference
  if (!user) return;
  // get reference to the user’s document in the users collection
  const userRef = firestore.doc(`users/${user.uid}`);
  // get the current content of the document
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
