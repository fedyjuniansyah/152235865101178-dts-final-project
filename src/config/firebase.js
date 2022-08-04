// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkLWUIbNLLjQEC1jOC-LFhRtp7D2rnWBs",
  authDomain: "fj-project-82368.firebaseapp.com",
  projectId: "fj-project-82368",
  storageBucket: "fj-project-82368.appspot.com",
  messagingSenderId: "397479810358",
  appId: "1:397479810358:web:22c260ec4503d60b3d4f97",
  measurementId: "G-N3Q4916Q7V"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};