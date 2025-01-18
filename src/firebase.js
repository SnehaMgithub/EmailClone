// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database"; 
// import { GoogleAuthProvider,getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDi56_wWop5WSEghGFSthA3cQQcYf0VK3A",
//   authDomain: "email-6ea45.firebaseapp.com",
//   projectId: "email-6ea45",
//   storageBucket: "email-6ea45.firebasestorage.app",
//   messagingSenderId: "170131970383",
//   appId: "1:170131970383:web:3f538b0ac2b89ee9fdcd3a",
//   measurementId: "G-ZYXRN021NY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();
// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();


// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (Ensure it's correct)
const firebaseConfig = {
  apiKey: "AIzaSyDi56_wWop5WSEghGFSthA3cQQcYf0VK3A",
  authDomain: "email-6ea45.firebaseapp.com", // Ensure this is correct
  projectId: "email-6ea45",
  storageBucket: "email-6ea45.appspot.com", // Fixed storage bucket name
  messagingSenderId: "170131970383",
  appId: "1:170131970383:web:3f538b0ac2b89ee9fdcd3a",
  measurementId: "G-ZYXRN021NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Correctly initialize Firebase services
export const auth = getAuth(app); // Ensure app is passed
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
