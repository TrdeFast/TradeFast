import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./pages/Auth";
import SteamAccounts from "./pages/SteamAccounts";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Страница логина */}
        <Route
          path="/"
          element={
            <Layout>
              <Auth />
            </Layout>
          }
        />

        {/* Личный кабинет */}
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        {/* Steam-аккаунты */}
        <Route
          path="/accounts"
          element={
            <Layout>
              <SteamAccounts />
            </Layout>
          }
        />

        {/* На все остальные пути — редирект на логин */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
