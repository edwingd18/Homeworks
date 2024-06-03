import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB8Ta7OQVuWl2DlCQagAMYFiAkqmwtsfmg",
  authDomain: "tranquil-rite-419712.firebaseapp.com",
  projectId: "tranquil-rite-419712",
  storageBucket: "tranquil-rite-419712.appspot.com",
  messagingSenderId: "139935788836",
  appId: "1:139935788836:web:c8efc35839c743aa8c4db1",
  measurementId: "G-Z0K0BRDE69"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseStorage = getStorage(app);
const db = getFirestore();

export { app, auth, firebaseStorage, db };
