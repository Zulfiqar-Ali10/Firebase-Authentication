// src/auth.js
import { auth, googleProvider } from "./firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut, } from "firebase/auth";

// Sign-in with email
export const signInWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Sign-up with email
export const signUpWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Sign-in with Google
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Sign-out
export const signOut = () => firebaseSignOut(auth);
