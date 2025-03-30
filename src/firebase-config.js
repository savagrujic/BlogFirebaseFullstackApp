// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQ7xHKzugplBNSAxz3Id0QfLKsx8_d4U",
  authDomain: "blogapp-cb3c2.firebaseapp.com",
  projectId: "blogapp-cb3c2",
  storageBucket: "blogapp-cb3c2.firebasestorage.app",
  messagingSenderId: "422900134474",
  appId: "1:422900134474:web:9e3d96640edb9911b82cb3",
  measurementId: "G-H0Z8QQ3VT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider =new  GoogleAuthProvider()
export const db = getFirestore(app)