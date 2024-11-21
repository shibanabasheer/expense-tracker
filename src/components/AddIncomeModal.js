import React, { useState } from "react";
import Modal from "react-modal";

const AddIncomeModal = ({ isOpen, onClose, onSave }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid income amount!");
      return;
    }
    onSave(parseFloat(amount));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Income">
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add Income</button>
      </form>
    </Modal>
  );
};

export default AddIncomeModal;

