import { initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAXT9PUSwZ_J_X_GODfVmkOIQ1QbaNh-LM",
  authDomain: "clone-4726c.firebaseapp.com",
  projectId: "clone-4726c",
  storageBucket: "clone-4726c.appspot.com",
  messagingSenderId: "17578314525",
  appId: "1:17578314525:web:6aca118cc6b71f9849aff4",
  measurementId: "G-163TVHEC1H"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
