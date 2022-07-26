// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6O_Oqj5JIaY5cbPfN4gsSHy_QwE1NZtY",
  authDomain: "distrimale.firebaseapp.com",
  projectId: "distrimale",
  storageBucket: "distrimale.appspot.com",
  messagingSenderId: "432155803029",
  appId: "1:432155803029:web:5a4c762d4ae225d4ac0a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



//initializeApp(firebaseConfig);