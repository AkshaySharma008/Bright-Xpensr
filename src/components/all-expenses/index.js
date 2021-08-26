import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./all-expenses.css";
import Dropdown from './dropdown';
import ExpenseTable from "./expense-table";

function AllExpenses(){
    let {expenseList: list} = useSelector((state)=> state.expenses);
    const [listArr, setListArr] = useState(list);
    let categoryList = list.map(item => item.category);
    categoryList = ["None", ...new Set(categoryList)]
    const dropdownCategories = [{types: categoryList,},];
    const filterByCategory = (e) => {
        if(e !== "None")
        list = list.filter(item => item.category === e);
        setListArr(list);
    }
    useEffect(() => {
        setListArr(listArr)
        }, [listArr])

      return(
        <div className="all-expenses">
            <div className="all-expenses-options">
                {/* <div className="search">
                    <input
                        placeholder={`Search any Expense`}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e)}
                    />
                    <i className="fi-rr-search"></i>
                </div> */}
                <div className="options-dropdown">
                    <div className="dropdown-parent">
                        <Dropdown
                          options={dropdownCategories}
                          onSelect={filterByCategory}
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
        <ExpenseTable list={listArr}/>
        </div>
    )
}

export default AllExpenses;