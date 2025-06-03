import React from "react";
import { useNavigate } from "react-router-dom";

const SteamAccounts = () => {
  const navigate = useNavigate();

  const accounts = [
    {
      login: "wUpfPyN5Od",
      password: "********",
      proxy: "********",
      steam2fa: "7V82M",
      confirmations: 0,
      level: 0,
      balance: "6$",
      inventory: "36.011$",
      status: "OK",
    },
    // можно добавить больше аккаунтов для примера
  ];

  return (
    <div className="min-h-screen bg-[#0D0C2B] text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Панель аккаунтов Steam</h1>
        <button
          onClick={() => navigate("/add-account")}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded shadow"
        >
          + Добавить аккаунт
        </button>
      </div>

      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full table-auto text-sm">
          <thead className="bg-[#1B1A3D]">
            <tr>
              <th className="px-4 py-2 text-left">Логин</th>
              <th className="px-4 py-2 text-left">Пароль</th>
              <th className="px-4 py-2 text-left">Прокси</th>
              <th className="px-4 py-2 text-left">Steam 2FA</th>
              <th className="px-4 py-2 text-left">Подтверждения</th>
              <th className="px-4 py-2 text-left">Уровень</th>
              <th className="px-4 py-2 text-left">Баланс</th>
              <th className="px-4 py-2 text-left">Инвентарь</th>
              <th className="px-4 py-2 text-left">Статус</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, idx) => (
              <tr
                key={idx}
                className="odd:bg-[#18173A] even:bg-[#161533] border-b border-[#2E2D52]"
              >
                <td className="px-4 py-2">{acc.login}</td>
                <td className="px-4 py-2">{acc.password}</td>
                <td className="px-4 py-2">{acc.proxy}</td>
                <td className="px-4 py-2">{acc.steam2fa}</td>
                <td className="px-4 py-2">{acc.confirmations}</td>
                <td className="px-4 py-2">{acc.level}</td>
                <td className="px-4 py-2">{acc.balance}</td>
                <td className="px-4 py-2">{acc.inventory}</td>
                <td className="px-4 py-2">
                  <span className="text-green-400">{acc.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SteamAccounts;
