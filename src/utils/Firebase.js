// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQtyMmV0jx9bWE8Wjrb0ypsEFBsdniL0g",
  authDomain: "netflix-gpt-adbcd.firebaseapp.com",
  projectId: "netflix-gpt-adbcd",
  storageBucket: "netflix-gpt-adbcd.firebasestorage.app",
  messagingSenderId: "93461895992",
  appId: "1:93461895992:web:ecaf13d6204006275f7fcd",
  measurementId: "G-P2YFYK5KZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app; // export the app