// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGTrZOuBeTJTwc06XxLHMoR2e56ot1Xlk",
  authDomain: "el-capitan-37e24.firebaseapp.com",
  projectId: "el-capitan-37e24",
  storageBucket: "el-capitan-37e24.appspot.com",
  messagingSenderId: "1053787387086",
  appId: "1:1053787387086:web:719c2a6ba308e88d2f0c9f",
  measurementId: "G-8LEHQM1QCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

;