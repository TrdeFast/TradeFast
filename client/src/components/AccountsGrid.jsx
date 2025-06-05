import React from 'react';
import AccountsCard from './AccountsCard';

const AccountsGrid = ({ accounts, onEdit, onDelete }) => {
  // Проверяем, что accounts — это именно массив и он не пустой
  if (!Array.isArray(accounts) || accounts.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        У вас пока нет добавленных аккаунтов.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {accounts.map((account) => (
        <AccountsCard
          key={account.id}
          account={account}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default AccountsGrid;
