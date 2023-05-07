// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyC2l9JjjZ1uTgvDL7Lw2ytLVbBCw6DQenQ",
  authDomain: "login-app-65085.firebaseapp.com",
  projectId: "login-app-65085",
  storageBucket: "login-app-65085.appspot.com",
  messagingSenderId: "844158866264",
  appId: "1:844158866264:web:6fc35c4f7c07fc33b1cb2d"
});

// Initialize Firebase

const auth = getAuth(app);
export default auth;


