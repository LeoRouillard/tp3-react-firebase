import { initializeApp } from 'firebase/app';
//import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_PROJECT_ID + ".firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    //databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
    //messagingSenderId: "SENDER_ID",
    appId: process.env.REACT_APP_PROJECT_ID,
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    //measurementId: "G-MEASUREMENT_ID",
};
  
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
export const auth = getAuth(app);
  