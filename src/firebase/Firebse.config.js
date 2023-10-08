// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQRZE_4ZszWJGurLZTsk41GVm0jZHk9YE",
  authDomain: "bee-party.firebaseapp.com",
  projectId: "bee-party",
  storageBucket: "bee-party.appspot.com",
  messagingSenderId: "377660501813",
  appId: "1:377660501813:web:c09f65f5724e36c25f267c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;