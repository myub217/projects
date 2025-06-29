// src/firebase-config.tsx

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// ✅ โหลดค่า config จาก environment variables (Vite จะเริ่มต้นด้วย VITE_ เท่านั้น)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// ✅ ตรวจสอบก่อน initialize เพื่อไม่ให้ซ้ำ
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ✅ ใช้งาน auth จาก Firebase
const auth = firebase.auth();

export { firebase, auth };