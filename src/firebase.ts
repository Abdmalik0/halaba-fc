import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Halaba FC Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD1swjfbgCpvt0NI0uwTlaAwV2AAjo-69o",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "halabafc.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "halabafc",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "halabafc.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "34931922331",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:34931922331:web:90c5af1703bba1fb83fd3e",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-PC0BB49XRK"
};

// Initialize Firebase safely
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore Database and export it
export const db = getFirestore(app);

