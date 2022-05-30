// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import {getAuth} from "firebase/firebase-auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlgea7VDdSZx27igoKQSWZtsNyeXPTbj0",
  authDomain: "grocery-store-bff8e.firebaseapp.com",
  projectId: "grocery-store-bff8e",
  storageBucket: "grocery-store-bff8e.appspot.com",
  messagingSenderId: "493901378086",
  appId: "1:493901378086:web:b51941c06a84f504cbace7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
