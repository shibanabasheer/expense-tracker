import React, { useState } from "react";
import Modal from "react-modal";

const AddExpenseModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      alert("Please fill in all fields!");
      return;
    }
    onSave({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Expense">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </Modal>
  );
};

export default AddExpenseModal;
