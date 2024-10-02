// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7dNjFaXnjx4I1axa6poQR2cexXUdm-eU",
  authDomain: "corvit-foodi.firebaseapp.com",
  projectId: "corvit-foodi",
  storageBucket: "corvit-foodi.appspot.com",
  messagingSenderId: "682644140028",
  appId: "1:682644140028:web:c0ef2d9208087a65d00c79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);