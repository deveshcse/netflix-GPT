// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtqXdvbRX4KxPpe71Bv08c2tTcBoFFMQM",
  authDomain: "netflixgpt-a1b44.firebaseapp.com",
  projectId: "netflixgpt-a1b44",
  storageBucket: "netflixgpt-a1b44.appspot.com",
  messagingSenderId: "472600108243",
  appId: "1:472600108243:web:5519aa9c418822df61c826",
  measurementId: "G-30R8ZBPVP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();