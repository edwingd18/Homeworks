// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8Ta7OQVuWl2DlCQagAMYFiAkqmwtsfmg",
  authDomain: "tranquil-rite-419712.firebaseapp.com",
  projectId: "tranquil-rite-419712",
  storageBucket: "tranquil-rite-419712.appspot.com",
  messagingSenderId: "139935788836",
  appId: "1:139935788836:web:c8efc35839c743aa8c4db1",
  measurementId: "G-Z0K0BRDE69"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp, auth, firebaseStorage };
