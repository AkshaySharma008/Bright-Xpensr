import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./modal.css";
import { editExpense } from "../../../reduxstore/actions/expenses";

const Modal = (prop) => {
  const { handleCloseBtn, details } = prop;
  const [description, setDescription] = useState(details.description);
  const [amount, setAmount] = useState(details.amount);
  const [category, setCategory] = useState(details.category);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const updatedData = {
      description,
      amount,
      category,
      createdAt: details.createdAt,
    };
    dispatch(editExpense(updatedData));
    handleCloseBtn();
  };

  return (
    <div className="modal">
      <div className="modal-info">
        <div className="modal-info-card">
          <div className="details-heading">Edit Expense</div>
          <div className="form-item">
            <label>Description</label>
            <input
              placeholder="Add Expense description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Amount ₹</label>
            <input
              type="Number"
              placeholder="  Enter Expense Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Category</label>
            <input
              placeholder="   Enter Expense Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-add-button">
            <button className="add-expense-btn" onClick={handleSubmit}>
              Edit Expense
            </button>
            &nbsp;
            <button className="cancel-btn" onClick={handleCloseBtn}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
