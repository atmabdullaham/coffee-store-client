// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyA4oRTBeY2Bg9YREAhbPBlsjE6CJgeThiQ",
 authDomain: "coffee-store-3c46c.firebaseapp.com",
 projectId: "coffee-store-3c46c",
 storageBucket: "coffee-store-3c46c.firebasestorage.app",
 messagingSenderId: "491692093183",
 appId: "1:491692093183:web:eae15340de8d2ba3c3e6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
