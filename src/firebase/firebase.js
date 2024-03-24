// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC24woz_dBBVUW1rnm2FxR3HyG51CyQlck",
    authDomain: "main-fix.firebaseapp.com",
    projectId: "main-fix",
    storageBucket: "main-fix.appspot.com",
    messagingSenderId: "257121179840",
    appId: "1:257121179840:web:ee34cb0f95abf6c12e7525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);