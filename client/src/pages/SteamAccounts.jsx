import React, { useEffect, useState } from 'react';
import AccountsGrid from '../components/AccountsGrid';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';

const SteamAccounts = () => {
  const [accounts, setAccounts] = useState([]); // по-умолчанию пустой массив
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/steam-accounts');

      // Если сервер вернул { accounts: [ … ] }
      if (response.data && Array.isArray(response.data.accounts)) {
        setAccounts(response.data.accounts);
      }
      // Если сразу идёт массив [ … ]
      else if (Array.isArray(response.data)) {
        setAccounts(response.data);
      }
      // Иначе — сбрасываем в пустой массив
      else {
        setAccounts([]);
      }
    } catch (err) {
      console.error('Ошибка при получении аккаунтов:', err);
      setError('Не удалось загрузить аккаунты. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    window.location.href = `/accounts/edit/${id}`;
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот аккаунт?')) return;
    try {
      await axios.delete(`/api/steam-accounts/${id}`);
      setAccounts((prev) => prev.filter((acc) => acc.id !== id));
    } catch (err) {
      console.error('Ошибка при удалении:', err);
      alert('Не удалось удалить аккаунт.');
    }
  };

  const handleAdd = () => {
    window.location.href = '/accounts/add';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Мои аккаунты</h1>
        <button
          onClick={handleAdd}
          className="flex items-center px-5 py-3 bg-accent hover:bg-emerald-600 text-white font-semibold rounded-button shadow-button transition-colors duration-150"
        >
          <FaPlus className="mr-2" /> Добавить аккаунт
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse">
            <div className="h-6 bg-secondary rounded w-48 mb-4"></div>
            <div className="h-6 bg-secondary rounded w-64 mb-4"></div>
            <div className="h-6 bg-secondary rounded w-32"></div>
          </div>
        </div>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <AccountsGrid
          accounts={accounts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default SteamAccounts;
