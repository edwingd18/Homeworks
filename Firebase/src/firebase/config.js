// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Ta7OQVuWl2DlCQagAMYFiAkqmwtsfmg",
  authDomain: "tranquil-rite-419712.firebaseapp.com",
  projectId: "tranquil-rite-419712",
  storageBucket: "tranquil-rite-419712.appspot.com",
  messagingSenderId: "139935788836",
  appId: "1:139935788836:web:c8efc35839c743aa8c4db1",
  measurementId: "G-Z0K0BRDE69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}