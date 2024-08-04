import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "[API KEY]",
  authDomain: "[DOMAIN].firebaseapp.com",
  projectId: "[DOMAIN]",
  storageBucket: "[DOMAIN].appspot.com",
  messagingSenderId: "[SENDER ID]",
  appId: "[API ID]"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
