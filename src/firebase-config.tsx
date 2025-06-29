// src/firebase-config.tsx

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// ✅ คอนฟิกจาก Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBBtKGbuRB4f5F6oQEywm3AX-fn5WWpzHM",
  authDomain: "application-6de2f.firebaseapp.com",
  projectId: "application-6de2f",
  storageBucket: "application-6de2f.firebasestorage.app",
  messagingSenderId: "208086903851",
  appId: "1:208086903851:web:6e0a8e697491a18ef20e6e",
  measurementId: "G-KFCXDPCSHC",
};

// ✅ ตรวจสอบก่อน initialize เพื่อไม่ให้ซ้ำ
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ✅ ใช้งาน auth จาก Firebase
const auth = firebase.auth();

export { firebase, auth };