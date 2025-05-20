// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBrncCHRxu4D_rRsSYaTrcgE1sJRySU8G0",
//   authDomain: "roommatefinderwebsite-fb.firebaseapp.com",
//   projectId: "roommatefinderwebsite-fb",
//   storageBucket: "roommatefinderwebsite-fb.firebasestorage.app",
//   messagingSenderId: "418390733831",
//   appId: "1:418390733831:web:83ea1b39db2cd3982ea6a2"
// };


// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);