import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ServicesPage from "@/pages/ServicesPage";
import SecretRoomPage from "@/pages/SecretRoomPage";
import AdminUserManagement from "@/pages/AdminUserManagement";
import CodeViewer from "@/pages/CodeViewer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/secret",
    element: <SecretRoomPage />,
  },
  {
    path: "/admin",
    element: <AdminUserManagement />,
  },
  {
    path: "/code",
    element: <CodeViewer />,
  },
]);

export default router;