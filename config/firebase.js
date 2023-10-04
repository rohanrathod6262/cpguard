import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAlkSQ2_olmgnedjOv2XIh0y9s2YdV9rk8",
  authDomain: "cpguide-64632.firebaseapp.com",
  projectId: "cpguide-64632",
  storageBucket: "cpguide-64632.appspot.com",
  messagingSenderId: "230401273260",
  appId: "1:230401273260:web:c007483f589b360e1e1e09",
  measurementId: "G-BWN1Y99X4W"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
