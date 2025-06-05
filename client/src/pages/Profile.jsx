import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Личный кабинет</h1>
      <p className="mb-6">
        Добро пожаловать в твой профиль! Здесь можно будет посмотреть баланс, историю действий и настройки.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Выйти
      </button>
    </div>
  );
};

export default Profile;
