import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1w6oV9cEok-GljuQZf3ATCH7x4dP87Po",
  authDomain: "chatapp-a09bc.firebaseapp.com",
  projectId: "chatapp-a09bc",
  storageBucket: "chatapp-a09bc.appspot.com",
  messagingSenderId: "13954429",
  appId: "1:13954429:web:1561bd5d1b926c5470f014",
  measurementId: "G-4Z9CNQSX2E"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();