import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="expense-list">
      <h2>Recent Transactions</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>₹{expense.amount}</span>
            <span>{expense.date}</span>
            <FaEdit onClick={() => onEdit(expense.id, expense)} />
            <FaTrash onClick={() => onDelete(expense.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
