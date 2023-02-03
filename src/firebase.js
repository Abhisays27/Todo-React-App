// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb970QvKeCwYnkTRJYQ-S2pV-oHAjPpUc",
  authDomain: "todo-app-97099.firebaseapp.com",
  projectId: "todo-app-97099",
  storageBucket: "todo-app-97099.appspot.com",
  messagingSenderId: "675138467703",
  appId: "1:675138467703:web:b2061d38a633c1add39372",
  measurementId: "G-7QHHRCQWR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)