// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeQSChvNUCfjiwKPRHey5Lf5ZcQEqi2IA",
  authDomain: "mightymonkeyclub-861ae.firebaseapp.com",
  projectId: "mightymonkeyclub-861ae",
  storageBucket: "mightymonkeyclub-861ae.appspot.com",
  messagingSenderId: "81000800451",
  appId: "1:81000800451:web:cbde0eb0e5a4492fbc0276",
  measurementId: "G-XE07K6MKRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);