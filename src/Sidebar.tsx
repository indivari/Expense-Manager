import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "./components";
import Dashboard from "./dashboard/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Expense Manager</h1>
      <ul>
        <li>
          <Link to="/dashboard" className="active">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/expenses">Manage Expenses</Link>
        </li>
        <li>
          <Link to="/category">Expenses By Category</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
