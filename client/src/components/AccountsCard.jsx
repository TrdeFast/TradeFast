import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const AccountsCard = ({ account, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-4">
        {account.avatarUrl ? (
          <img src={account.avatarUrl} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
            <span className="text-gray-500">NA</span>
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-primary">{account.username}</h3>
          <div className="flex items-center mt-1">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${
                account.status === 'active' ? 'bg-success' : account.status === 'error' ? 'bg-warning' : 'bg-gray-400'
              }`}
            />
            <span className="text-sm text-gray-600 capitalize">{account.status}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-3">
        <button
          onClick={() => onEdit(account.id)}
          className="flex items-center px-4 py-2 bg-secondary hover:bg-gray-200 text-gray-700 rounded-button shadow-button transition-colors duration-150"
        >
          <FaEdit className="mr-2" /> Редактировать
        </button>
        <button
          onClick={() => onDelete(account.id)}
          className="flex items-center px-4 py-2 bg-danger hover:bg-red-600 text-white rounded-button shadow-button transition-colors duration-150"
        >
          <FaTrash className="mr-2" /> Удалить
        </button>
      </div>
    </div>
  );
};

export default AccountsCard;
