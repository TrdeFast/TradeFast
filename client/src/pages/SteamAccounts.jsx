import React, { useState, useMemo } from "react";
import AccountsTable from "../components/AccountsTable";

const SteamAccounts = () => {
  const [accounts] = useState([
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
    // При необходимости добавь другие аккаунты
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredAccounts = useMemo(() => {
    return accounts.filter((acc) => {
      const matchesLogin = acc.login
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStatus = statusFilter ? acc.status === statusFilter : true;
      return matchesLogin && matchesStatus;
    });
  }, [accounts, search, statusFilter]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-white">
          Панель аккаунтов Steam
        </h1>
        <div className="flex space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white text-gray-800 rounded px-3 py-2"
          >
            <option value="">Все статусы</option>
            <option value="OK">OK</option>
            <option value="Blocked">Blocked</option>
          </select>
          <input
            type="text"
            placeholder="Поиск по логину..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg"
          />
        </div>
      </div>
      <AccountsTable data={filteredAccounts} />
    </div>
  );
};

export default SteamAccounts;