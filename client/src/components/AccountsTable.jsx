import React from "react";

const AccountsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Логин</th>
            <th className="py-3 px-4 text-left">Пароль</th>
            <th className="py-3 px-4 text-left">Прокси</th>
            <th className="py-3 px-4 text-left">Steam 2FA</th>
            <th className="py-3 px-4 text-left">Подтверждения</th>
            <th className="py-3 px-4 text-left">Уровень</th>
            <th className="py-3 px-4 text-left">Баланс</th>
            <th className="py-3 px-4 text-left">Инвентарь</th>
            <th className="py-3 px-4 text-left">Статус</th>
            <th className="py-3 px-4 text-left">Действия</th>
          </tr>
        </thead>
        <tbody>
          {data.map((acc, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
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
                {acc.status === "OK" ? (
                  <span className="text-green-600 font-semibold">✔️ OK</span>
                ) : (
                  <span className="text-red-600 font-semibold">❌ {acc.status}</span>
                )}
              </td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-blue-500 hover:text-blue-700">✏️</button>
                <button className="text-red-500 hover:text-red-700">🗑️</button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan="10" className="py-4 text-center text-gray-500">
                Ничего не найдено.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable;