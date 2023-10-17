import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "irfansir-ee9d1.firebaseapp.com",
  projectId: "irfansir-ee9d1",
  storageBucket: "irfansir-ee9d1.appspot.com",
  messagingSenderId: "534724409434",
  appId: "1:534724409434:web:4cc1c22770e48f4b924063"
};


export  const app = initializeApp(firebaseConfig);