import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Expense Manager</h2>
      <ul>
        <li>
          <Link to="/Dashboard" className="active">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Expenses">Manage Expenses</Link>
        </li>
        <li>
          <Link to="/Category">Expenses By Category</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
