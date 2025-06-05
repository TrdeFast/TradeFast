import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    // Разворачиваем на весь экран, задаём общий фон #140f3a (как в Auth)
    <div className="min-h-screen bg-[#140f3a] text-white">
      {/* Везде сверху выводим навигационный бар */}
      <Navbar />

      {/* Основная область под контент (Auth / Profile / SteamAccounts) */}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Layout;
