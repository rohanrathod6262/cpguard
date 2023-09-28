import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAW0AkjQ-VOrOuJqSIMjxTSCfTjas6kIpA",
  authDomain: "cpguard-ced66.firebaseapp.com",
  projectId: "cpguard-ced66",
  storageBucket: "cpguard-ced66.appspot.com",
  messagingSenderId: "977050612005",
  appId: "1:977050612005:web:820d0cc8631215a3deaacc",
  measurementId: "G-48525FVLXT"
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
