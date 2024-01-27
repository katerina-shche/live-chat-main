// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore, collection, 
    getDocs,
    onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALgVz1iXD7nDatQZbx0HSxf0cEhFRppuU",
  authDomain: "fire-9-dojo-ka-shche.firebaseapp.com",
  projectId: "fire-9-dojo-ka-shche",
  storageBucket: "fire-9-dojo-ka-shche.appspot.com",
  messagingSenderId: "997936482696",
  appId: "1:997936482696:web:ee9679a1256915b184d23d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init servises
const projectFirestore = getFirestore()
const projectAuth = getAuth()

const timestamp = serverTimestamp

export { projectFirestore, timestamp, projectAuth }

