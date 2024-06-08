// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNABKlEf6yn444PCbO1eZ5W4ivI7t25N8",
  authDomain: "netflixgpt-8f358.firebaseapp.com",
  projectId: "netflixgpt-8f358",
  storageBucket: "netflixgpt-8f358.appspot.com",
  messagingSenderId: "372206481421",
  appId: "1:372206481421:web:f69adb447d1abda700e544",
  measurementId: "G-GRDL2D70Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();