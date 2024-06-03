// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcbIVqi5aqAHjQqlQz4WG3-wGWPVq_iJA",
  authDomain: "playgroound-bc5b5.firebaseapp.com",
  projectId: "playgroound-bc5b5",
  storageBucket: "playgroound-bc5b5.appspot.com",
  messagingSenderId: "1048744607257",
  appId: "1:1048744607257:web:a23580b3aaacf7b1f9b488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}