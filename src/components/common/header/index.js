import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./header.css";


function Header(){
  const tabName = window.location.pathname.substring(1);
  const [tab, setTab] = useState(tabName);
  return(
    <div className="header">
      <Link to="/all-expenses" className="logo-a">
        <label className="logo">Bright Xpensr</label>
      </Link>
      <div className="header-menu">
        <Link to="/all-expenses">
          <label
            className={`menu-option ${tab === "all-expenses" && "active-tab"}`}
            onClick={() => setTab("all-expenses")}
          >
            All Expenses
          </label>
        </Link>
        <Link to="/expenses-analysis">
          <label
            className={`menu-option ${tab === "expenses-analysis" && "active-tab"}`}
            onClick={() => setTab("expenses-analysis")}
          >
            Expenses Analysis
          </label>
        </Link>
        <Link to="/due-expenses">
          <label
            className={`menu-option ${tab === "due-analysis" && "active-tab"}`}
            onClick={() => setTab("due-analysis")}
          >
            Due Expenses
          </label>
        </Link>
      </div>
    </div>
  )
}

export default Header;
