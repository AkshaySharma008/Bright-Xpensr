import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './add-expense.css';
import { addExpense } from '../../reduxstore/actions/expenses';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';


function AddExpense(){
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleAmount = (e) => {
        setAmount(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const { goBack } = useHistory();
    const cancel = () => {
        console.log('cancel');
    }
    const handleSubmit = () => {
        if(description === "" || amount === "" || category === ""){
            const notify = () => {
                toast("Please Enter Valid Expense Date !!!")
            }
            notify();
            return;
        }
        const data = {
            description,
            amount,
            category,
            createdAt: new Date()
        };
        dispatch(addExpense(data));
        setModalOpen(true);
    }
    return (
        <div className="expense-details">
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                
                />
            <SuccessModal 
                modalOpen={modalOpen} 
                setModalOpen={setModalOpen} />
        <div className="expense-details-options">
            <div className="back-button " onClick={() => goBack()}>
            <i className="fi-rr-angle-left"></i>
            Back
            </div>
            <div className="cancel-button back-button" onClick={() => cancel()}>
            <i className="fi-rr-cross-circle"></i>
            Cancel
            </div>
        </div>
        <div className="expense-info">
        <div className="details-heading">Add Expense</div>
        <div className="expense-info-card">
            <div className="form-item">
                <label>Description</label>
                <input 
                placeholder="    Add Expense description" 
                value = {description}
                onChange = { (e) => handleDescription(e)}
                />
            </div>
            <div className="form-item">
                <label>Amount ₹</label>
                <input
                    type="Number"
                    placeholder="    Enter Expense Amount" 
                    value={amount}
                    onChange = { (e) => handleAmount(e)}
                />

            </div>
            <div className="form-item">
                <label>Category</label>
                <input 
                    placeholder="    Enter Expense Category"
                    value={category}
                    onChange = {(e) => handleCategory(e)}
                />
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit} >
                    <label className="add-btn">Add Expense</label>
                    <i className="fi-rr-paper-plane"></i>
                </div>
            </div>
        </div>
        </div>
        
        </div>
    )
}

export default AddExpense;