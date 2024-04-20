// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIQgYEGLSRljYeVL42ygV7bPpbr-HdqNA",
  authDomain: "itstime-cb9d8.firebaseapp.com",
  projectId: "itstime-cb9d8",
  storageBucket: "itstime-cb9d8.appspot.com",
  messagingSenderId: "640739193098",
  appId: "1:640739193098:web:98a886432abe5b03160af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };