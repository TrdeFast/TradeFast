import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Функция, которая подсвечивает активную ссылку более светлым фоном
  const linkClasses = (path) =>
    `px-3 py-2 rounded ${
      location.pathname === path ? "bg-[#feca57] text-black" : "text-white"
    }`;

  return (
    <nav className="bg-[#1e1e2e] p-4 flex space-x-4">
      <Link to="/" className={linkClasses("/")}>
        Login
      </Link>
      <Link to="/profile" className={linkClasses("/profile")}>
        Profile
      </Link>
      <Link to="/accounts" className={linkClasses("/accounts")}>
        Accounts
      </Link>
    </nav>
  );
};

export default Navbar;
