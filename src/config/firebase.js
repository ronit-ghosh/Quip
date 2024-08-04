import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBJG-lr1f_te7hnWG59vhnlSmTqGlIWnLA",
  authDomain: "quip-dc230.firebaseapp.com",
  projectId: "quip-dc230",
  storageBucket: "quip-dc230.appspot.com",
  messagingSenderId: "616135368665",
  appId: "1:616135368665:web:05525e8e37e31c35b3c3c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
