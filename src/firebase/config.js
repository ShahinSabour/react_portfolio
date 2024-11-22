import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfSw2ZSXYRwtMH2_ANjZIhEiAEHbSBwD8",
    authDomain: "portfolio-e57d6.firebaseapp.com",
    projectId: "portfolio-e57d6",
    storageBucket: "portfolio-e57d6.firebasestorage.app",
    messagingSenderId: "861317254199",
    appId: "1:861317254199:web:6b6393001b2314775d43b2"
  };


// init firebase
initializeApp(firebaseConfig)

// init fireStore
const db = getFirestore()

export {db}