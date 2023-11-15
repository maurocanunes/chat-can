// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhyZDliJvHW-VNPk6J-zZbiRq8Zeae7Ls",
    authDomain: "chat-with-gpt-a382b.firebaseapp.com",
    projectId: "chat-with-gpt-a382b",
    storageBucket: "chat-with-gpt-a382b.appspot.com",
    messagingSenderId: "210224164469",
    appId: "1:210224164469:web:d86976db6fea2aa614923c",
    measurementId: "G-YHDYM21GPN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);