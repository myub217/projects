// src/pages/LoginPage.tsx
import React from "react";
import { FirebaseAuth } from "firebaseui-react";
import "firebaseui/dist/firebaseui.css";

import { firebase, auth } from "@/firebase-config"; // ✅ ใช้ named imports
import SEOHelmet from "@/components/SEOHelmet";

const LoginPage: React.FC = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // ✅ เพิ่มผู้ให้บริการอื่นได้ เช่น Facebook, Phone
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        window.location.href = "/secret-room";
        return false; // ป้องกัน redirect ซ้ำ
      },
    },
  };

  return (
    <>
      <SEOHelmet
        title="เข้าสู่ระบบ | JP Visual & Docs"
        description="เข้าสู่ระบบด้วยบัญชี Google หรืออีเมล เพื่อเข้าถึงฟีเจอร์พิเศษ"
      />
      <main className="min-h-screen bg-gradient-to-b from-base-100 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center px-4">
        <section
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm"
          aria-labelledby="login-title"
        >
          <h1
            id="login-title"
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6"
          >
            🔐 เข้าสู่ระบบ
          </h1>

          <div className="text-sm text-center text-gray-500 dark:text-gray-300 mb-4">
            ใช้อีเมลหรือบัญชี Google เพื่อเข้าสู่ระบบ
          </div>

          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />

          <div className="mt-6 text-xs text-center text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} JP Visual & Docs
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPage;