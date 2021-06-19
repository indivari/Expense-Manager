import React from 'react'
import './expenses.css'
import { PrimaryButton } from '../components'

type Expense = {
  date: Date
  category: string
  amount: number
}

const Expenses = () => {
  let exp: Expense[] = [{ date: new Date(), category: 'Lunch', amount: 50 }]

  return (
    <>
      <div className="expenses">
        <h2>Recent Expenses</h2>
      </div>
      <div className="expenses-container">
        <div className="row">
          <div className="column">
            <div className="date-header">Date</div>
          </div>

          <div className="column">
            <div className="category-header">Category</div>
          </div>

          <div className="column">
            <div className="amount-header">Amount Paid</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <PrimaryButton label="Add" />
      </div>
    </>
  )
}

export default Expenses
