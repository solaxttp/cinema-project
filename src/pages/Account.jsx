// src/pages/Account.jsx
import React from 'react';
import './Account.css';

const Account = () => {
  const user = {
    firstName: 'Соломія',
    lastName: 'Куприсюк',
    email: 'solka.kupr@gmail.com',
    bonuses: 240
  };

  return (
    <div className="account-container">
      <div className="account-card">
        <h2>👤 Мій акаунт</h2>
        <p><strong>Ім’я:</strong> {user.firstName}</p>
        <p><strong>Прізвище:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <div className="bonus-box">
          🎁 У вас є <strong>{user.bonuses}</strong> бонусів
        </div>
      </div>
    </div>
  );
};

export default Account;
