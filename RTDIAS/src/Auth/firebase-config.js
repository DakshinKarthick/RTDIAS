// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHcaHyK9cs6GcibbO6Qf9ucgR2chW_-2w",
  authDomain: "resqnow-d940e.firebaseapp.com",
  projectId: "resqnow-d940e",
  storageBucket: "resqnow-d940e.firebasestorage.app",
  messagingSenderId: "1055723221596",
  appId: "1:1055723221596:web:b2241a26256168cb01ec99",
  measurementId: "G-LQP681B91T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);