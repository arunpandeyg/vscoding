// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmUSzLUCmxiXdU76OWRGtNGwA3Z6-QLbA",
  authDomain: "otp-project-d8db4.firebaseapp.com",
  projectId: "otp-project-d8db4",
  storageBucket: "otp-project-d8db4.appspot.com",
  messagingSenderId: "131790270565",
  appId: "1:131790270565:web:c3983f5c19b17c972f968c",
  measurementId: "G-N08ZMTB0NX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
