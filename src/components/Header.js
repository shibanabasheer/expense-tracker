import React from "react";

const Header = ({ walletBalance, onAddIncome }) => {
  return (
    <div className="header">
      <h1>Expense Tracker</h1>
      <div className="wallet-balance">
        <span>Wallet Balance: ₹{walletBalance}</span>
        <button onClick={onAddIncome}>+ Add Income</button>
      </div>
    </div>
  );
};

export default Header;
