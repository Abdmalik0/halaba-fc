import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Halaba FC Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1swjfbgCpvt0NI0uwTlaAwV2AAjo-69o",
  authDomain: "halabafc.firebaseapp.com",
  projectId: "halabafc",
  storageBucket: "halabafc.firebasestorage.app",
  messagingSenderId: "34931922331",
  appId: "1:34931922331:web:90c5af1703bba1fb83fd3e",
  measurementId: "G-PC0BB49XRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database and export it
export const db = getFirestore(app);
