import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'


var config = {
    apiKey: "AIzaSyDDPpAzFt8XAD7eeORs6btKEvGMYqvqqqw",
    authDomain: "ecommerce-bf637.firebaseapp.com",
    projectId: "ecommerce-bf637",
    storageBucket: "ecommerce-bf637.appspot.com",
    messagingSenderId: "476363704792",
    appId: "1:476363704792:web:6c5347ef4f7339fea60aad"
};
firebase.initializeApp(config)

export const auth = firebase.auth();
// note use yet
export const firestore = firebase.firestore();

// Google auth and Sign in with popup window

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle =  () => auth.signInWithPopup(provider);


export default firebase;