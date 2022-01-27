import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initializeFirebase = () => {
  return initializeApp(firebaseConfig);
};

export default initializeFirebase;
