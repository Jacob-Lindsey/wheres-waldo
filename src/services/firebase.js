import dotenv from 'dotenv';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
dotenv.config();

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const db = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();  

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user._delegate.displayName)
    }).catch((error) => {
        console.log(error.message)
    })
};

export const logOut = () => {
    auth.signOut().then(() => {
        console.log('Logged Out')
    }).catch((error) => {
        console.log(error.message)
    })
    window.location.reload();
};

export { db, timestamp, auth };