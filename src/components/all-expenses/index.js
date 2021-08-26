import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./all-expenses.css";
import Dropdown from './dropdown';
import ExpenseTable from "./expense-table";

function AllExpenses(){
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        dispatch.searchQuery(e.target.value);
    }
    const {expenseList: list} = useSelector((state)=> state.expenses);
    const dropdownCategories = [{types: ["One", "Two", "Three", "Four", "Five"],},];    
      return(
        <div className="all-expenses">
            <div className="all-expenses-options">
                <div className="search">
                    <input
                        placeholder={`Search any Expense`}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e)}
                    />
                    <i className="fi-rr-search"></i>
                </div>
                <div className="options-dropdown">
                    <div className="dropdown-parent">
                        <Dropdown
                          options={dropdownCategories}
                        //   onSelect={}
                          toShow="Enter Category Name"
                        />
                    </div>
                </div>
                <div>
                    <Link to="/add-expense">
                        <button className="add-expense-btn">
                            Add Expense
                        </button>
                    </Link>
                </div>
      </div>
        <ExpenseTable list={list}/>
        </div>
    )
}

export default AllExpenses;