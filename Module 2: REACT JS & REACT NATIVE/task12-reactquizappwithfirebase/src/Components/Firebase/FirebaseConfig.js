// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDjHaDZCxBjKCYCNCCEK-2ENs82I1al1rk",
    authDomain: "react-quizapp-603da.firebaseapp.com",
    projectId: "react-quizapp-603da",
    storageBucket: "react-quizapp-603da.appspot.com",
    messagingSenderId: "913823212570",
    appId: "1:913823212570:web:b737f3b6d24b37c0f29da3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


// const auth = firebase.auth();
// const db = firebase.firestore();

export {app, createUserWithEmailAndPassword, auth, signInWithEmailAndPassword, db, doc, setDoc, onAuthStateChanged, getDoc, updateDoc, signOut};