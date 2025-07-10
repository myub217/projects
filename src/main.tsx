import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SecretRoomPage from "./pages/SecretRoomPage";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<IndexPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret"
          element={<SecretRoomPage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);