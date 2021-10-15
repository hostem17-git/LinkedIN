// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6c6toCPQproHT438xplxJ4w5i5bOaiW8",
    authDomain: "linkedin-66877.firebaseapp.com",
    projectId: "linkedin-66877",
    storageBucket: "linkedin-66877.appspot.com",
    messagingSenderId: "90676533726",
    appId: "1:90676533726:web:d28fef9aa860dcced7e54f",
    measurementId: "G-XJ5MT2CRHS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };