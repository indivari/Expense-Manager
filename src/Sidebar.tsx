import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Expense Manager</h2>
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
  )
}

export default Sidebar
