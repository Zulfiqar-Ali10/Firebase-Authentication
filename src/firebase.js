// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCxXVHnIE5pXV9C26NVXhZQnBMsy5fCBaU",
    authDomain: "react-auth-eed05.firebaseapp.com",
    projectId: "react-auth-eed05",
    storageBucket: "react-auth-eed05.appspot.com",
    messagingSenderId: "481393288202",
    appId: "1:481393288202:web:6e340b90ad0ac7ebb12bf3",
    databaseUrl: 'https://react-auth-eed05-default-rtdb.firebaseio.com'
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Create auth instance
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider }; // Export auth and provider


