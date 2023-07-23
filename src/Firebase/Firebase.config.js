// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZWVYnWcCG0lVBNfuOV4bACnkaPZXya8s",
  authDomain: "collegzy.firebaseapp.com",
  projectId: "collegzy",
  storageBucket: "collegzy.appspot.com",
  messagingSenderId: "688849410536",
  appId: "1:688849410536:web:86231c1c875e158e85ac5d"
};

// Initialize Firebase
const collegzyApp = initializeApp(firebaseConfig); 

export default collegzyApp