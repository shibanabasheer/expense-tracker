import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import AddExpenseModal from "./components/AddExpenseModal";
import AddIncomeModal from "./components/AddIncomeModal";
import { SnackbarProvider } from "notistack";
import "./App.css";

const App = () => {
  const [walletBalance, setWalletBalance] = useState(
    JSON.parse(localStorage.getItem("walletBalance")) || 5000
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("walletBalance", JSON.stringify(walletBalance));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [walletBalance, expenses]);

  const addExpense = (expense) => {
    if (walletBalance < expense.amount) {
      alert("Insufficient wallet balance!");
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const editExpense = (id, updatedExpense) => {
    const updatedExpenses = expenses.map((exp) =>
      exp.id === id ? updatedExpense : exp
    );
    const oldExpense = expenses.find((exp) => exp.id === id);
    setWalletBalance(walletBalance + oldExpense.amount - updatedExpense.amount);
    setExpenses(updatedExpenses);
  };

  const deleteExpense = (id) => {
    const expenseToDelete = expenses.find((exp) => exp.id === id);
    setWalletBalance(walletBalance + expenseToDelete.amount);
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app">
        <Header
          walletBalance={walletBalance}
          onAddIncome={() => setShowAddIncomeModal(true)}
        />
        <div className="main-content">
          <ExpenseList
            expenses={expenses}
            onEdit={editExpense}
            onDelete={deleteExpense}
          />
          <ExpenseSummary expenses={expenses} />
        </div>
        <AddExpenseModal
          isOpen={showAddExpenseModal}
          onClose={() => setShowAddExpenseModal(false)}
          onSave={addExpense}
        />
        <AddIncomeModal
          isOpen={showAddIncomeModal}
          onClose={() => setShowAddIncomeModal(false)}
          onSave={(income) => setWalletBalance(walletBalance + income)}
        />
        <button
          className="add-expense-button"
          onClick={() => setShowAddExpenseModal(true)}
        >
          + Add Expense
        </button>
      </div>
    </SnackbarProvider>
  );
};

export default App;
