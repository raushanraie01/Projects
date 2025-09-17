// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaQgMSk_oLIFhXVWRaaNmRaq6pC9mX0TY",
  authDomain: "project-e1498.firebaseapp.com",
  projectId: "project-e1498",
  storageBucket: "project-e1498.firebasestorage.app",
  messagingSenderId: "1099075592009",
  appId: "1:1099075592009:web:6957f56dd02a2c1f0ec498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);