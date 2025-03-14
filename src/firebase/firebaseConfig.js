// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqozkFc0I4BtV2_SpkLYsljwqt_pecxOs",
  authDomain: "react-c713f.firebaseapp.com",
  projectId:"react-c713f",
  storageBucket: "react-c713f.firebasestorage.app",
  messagingSenderId: "358914760737",
  appId: "1:358914760737:web:8e07991ab0af3cc719c360Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export{app,auth,database};
