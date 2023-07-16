import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyAZSGEGdx12j2wcRNHY741hnISbORoTw",
  authDomain: "travel-planner-cd73d.firebaseapp.com",
  projectId: "travel-planner-cd73d",
  storageBucket: "travel-planner-cd73d.appspot.com",
  messagingSenderId: "672901583588",
  appId: "1:672901583588:web:e66409b51f9b906e43d2f1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
