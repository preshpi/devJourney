import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_MY_API_KEY,
  authDomain: "devjourney-69146.firebaseapp.com",
  projectId: "devjourney-69146",
  storageBucket: "devjourney-69146.appspot.com",
  messagingSenderId: "723761796593",
  appId: "1:723761796593:web:8effb28750a2a064cf6050",
  measurementId: "G-KB8CB5B65B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
