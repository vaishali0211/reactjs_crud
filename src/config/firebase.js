// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaHGE2LqsDLVSahtc21hTiuvXRQ7s_sTo",
  authDomain: "vite-contact-30337.firebaseapp.com",
  projectId: "vite-contact-30337",
  storageBucket: "vite-contact-30337.appspot.com",
  messagingSenderId: "265784224392",
  appId: "1:265784224392:web:97bd65314efe8916d04d3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);