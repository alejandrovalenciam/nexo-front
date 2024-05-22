import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCy1ZBQzQAsXI3De6AanvOWsiyhWi8cAsg",
    authDomain: "nexo-login-24186.firebaseapp.com",
    projectId: "nexo-login-24186",
    storageBucket: "nexo-login-24186.appspot.com",
    messagingSenderId: "746374776514",
    appId: "1:746374776514:web:7d2415a30ceb1ec9685d5b"
}

// Añade un nombre único para esta instancia de Firebase
const appFirebase = firebase.initializeApp(firebaseConfig, "miApp");

export default appFirebase;
