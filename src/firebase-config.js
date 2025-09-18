// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Raushan's Firebase Config
  apiKey: "AIzaSyARyaHkMpurl2jiGrnmvZzkv_Vgg0tf9J4",
  authDomain: "democheckapp-c1335.firebaseapp.com",
  projectId: "democheckapp-c1335",
  storageBucket: "democheckapp-c1335.firebasestorage.app",
  messagingSenderId: "831070666331",
  appId: "1:831070666331:web:72d3c53f0660dda1e8897e",
  measurementId: "G-4MS6892SZ8"
  //Abhishek's Firebase Config
  //   apiKey: "AIzaSyB14bShCi4mzodIb-on5QdWLRbWagalFpk",
  // authDomain: "abhishekapp-90dc4.firebaseapp.com",
  // projectId: "abhishekapp-90dc4",
  // storageBucket: "abhishekapp-90dc4.firebasestorage.app",
  // messagingSenderId: "552781196601",
  // appId: "1:552781196601:web:0801122d1d64734bf2cce8",
  // measurementId: "G-PQFDENZWYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore } from "firebase/firestore";
export const auth = getAuth(app);
export const db = getFirestore(app);