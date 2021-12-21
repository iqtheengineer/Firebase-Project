// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8eu02SAK7lYz_ZpMTMSBf9Y69fs7H50k",
  authDomain: "hackathon-group-project.firebaseapp.com",
  projectId: "hackathon-group-project",
  storageBucket: "hackathon-group-project.appspot.com",
  messagingSenderId: "841445363073",
  appId: "1:841445363073:web:60cf8f64bfc15e66f5ac80",
  measurementId: "G-DBSY5FKZP5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // firebase authentication object
export const firestore = firebase.firestore(); // firestore db
export default firebase;