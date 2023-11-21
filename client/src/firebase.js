// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ad8d9.firebaseapp.com",
  projectId: "mern-estate-ad8d9",
  storageBucket: "mern-estate-ad8d9.appspot.com",
  messagingSenderId: "505211559106",
  appId: "1:505211559106:web:8e1b96586743d656ea6f5b",
  measurementId: "G-DRK1QG6VNN"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);