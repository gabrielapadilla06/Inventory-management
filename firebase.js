// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN9y2Dg5fTLEgc5GoiZuFQK40L5yQ_uGM",
  authDomain: "inventory-de72e.firebaseapp.com",
  projectId: "inventory-de72e",
  storageBucket: "inventory-de72e.appspot.com",
  messagingSenderId: "42401318133",
  appId: "1:42401318133:web:90725f78541157eaaff1bc",
  measurementId: "G-73D8V9W6LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};