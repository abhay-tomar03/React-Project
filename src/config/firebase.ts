// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";

// connecting to the firebase database

import {getFirestore} from 'firebase/firestore'

// integrating authentication

import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAitOIcZMEGf69VHT_0P0_rmNm96ksaXHU",
  authDomain: "react-social-media-proje-7e8ae.firebaseapp.com",
  projectId: "react-social-media-proje-7e8ae",
  storageBucket: "react-social-media-proje-7e8ae.appspot.com",
  messagingSenderId: "397256000764",
  appId: "1:397256000764:web:2bf91d138b84272820c379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// connecting to the database 
export const db = getFirestore(app);
