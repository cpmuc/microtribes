import { initializeApp } from "firebase/app";
import {
  getFirestore,
  // enableIndexedDbPersistence,
  // getDoc,
  // updateDoc,
} from "firebase/firestore/lite";

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDYGQfdLlsUZScQIm90_8u0Bam5eKvrL40",
  authDomain: "microtribes-2022.firebaseapp.com",
  projectId: "microtribes-2022",
  storageBucket: "microtribes-2022.appspot.com",
  messagingSenderId: "957034250493",
  appId: "1:957034250493:web:759c4f523c28e6c47dbe94",
});

export const db = getFirestore();
