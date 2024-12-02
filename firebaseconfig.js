import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAG_svFOY5xu3HA2r-t4rw_-5mZ-nHAWHQ",
    authDomain: "to-do-list-new-50206.firebaseapp.com",
    projectId: "to-do-list-new-50206",
    storageBucket: "to-do-list-new-50206.firebasestorage.app",
    messagingSenderId: "808053679653",
    appId: "1:808053679653:web:2a0e24a3e36bf8582301cc",
    measurementId: "G-M8634PG4M1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
export const db = getFirestore(app); 