import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyC2FL86zTPjpdkHsII9JuuBPv9UvDTTAjY",
//   authDomain: "sbsproject-23573.firebaseapp.com",
//   projectId: "sbsproject-23573",
//   storageBucket: "sbsproject-23573.appspot.com",
//   messagingSenderId: "451177725243",
//   appId: "1:451177725243:web:5b9700efbd4140fa0fcb1e"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCuhcd7ISYBWQc_-HknXWrKBNgBV7ZYnCU",
  authDomain: "sbsnewproject.firebaseapp.com",
  projectId: "sbsnewproject",
  storageBucket: "sbsnewproject.appspot.com",
  messagingSenderId: "256908177234",
  appId: "1:256908177234:web:0aa00f0bbdc4a0c0d5548b",
  measurementId: "G-JG4GLYKX8E",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new EmailAuthProvider();
