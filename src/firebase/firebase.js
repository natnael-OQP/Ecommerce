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

export const createUserProfile = async (userAuth,AdditionalData) =>{
    // if there is no user exiting  ✔🍕
    // if(!userAuth) return;
    // documentReference  ✔🍕
    const docRef = firestore.doc(`/user/${userAuth.uid}`);
    // documentReference  return documentSnapshot object   ✔🍕
    const snapshot = await docRef.get();
    // if there is no data based on uid create a new data object  ✔🍕
    if(!snapshot.exists){
        const {displayName,email,photoURL} = userAuth;
        const createdAt = new Date();
        try 
        {
            docRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...AdditionalData
            })
        } 
        catch (error) {
            console.error(error);
        }
    }
    return docRef;
}   

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Google auth and Sign in with popup window
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;