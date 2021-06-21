import React from 'react'
import './expenses.css'
import { PrimaryButton } from '../components'
import ExpenseTable from './ExpenseTable'

const handleAddItem = () => {
  console.log('You clicked me')
}
const Expenses = () => {
  return (
    <>
      <div>
        <div className="expenses">
          <h2>Recent Expenses</h2>
        </div>
        <ExpenseTable />
      </div>
      <div className="footer">
        <PrimaryButton label="Add" onClick={handleAddItem} />
      </div>
    </>
  )
}

export default Expenses
