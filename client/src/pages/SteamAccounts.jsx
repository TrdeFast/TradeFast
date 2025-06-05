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
    // Другие аккаунты можно добавить сюда
  ];

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold mb-4">Панель аккаунтов Steam</h1>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left">Логин</th>
              <th className="py-3 px-4 text-left">Пароль</th>
              <th className="py-3 px-4 text-left">Прокси</th>
              <th className="py-3 px-4 text-left">Steam 2FA</th>
              <th className="py-3 px-4 text-left">Подтверждения</th>
              <th className="py-3 px-4 text-left">Уровень</th>
              <th className="py-3 px-4 text-left">Баланс</th>
              <th className="py-3 px-4 text-left">Инвентарь</th>
              <th className="py-3 px-4 text-left">Статус</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {accounts.map((acc, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
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
