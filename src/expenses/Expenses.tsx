import React from 'react'
import './expenses.css'
import { PrimaryButton } from '../components'

type Expense = {
  id: number
  date: Date
  category: string
  amount: number
}

const Expenses = () => {
  let exp: Expense[] = [
    { id: 1, date: new Date(), category: 'Lunch', amount: 50 },
    { id: 2, date: new Date(), category: 'travel', amount: 100 },
    { id: 3, date: new Date(), category: 'Lunch', amount: 25 },
    { id: 4, date: new Date(), category: 'clothing', amount: 200 },
  ]

  const handleAddItem = () => {
    console.log('You clicked me')
  }

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

        {exp.map((data: Expense) => (
          <div className="row">
            <div className="column">
              <div className="date">{data.date.toDateString()}</div>
            </div>

            <div className="column">
              <div className="category">{data.category}</div>
            </div>

            <div className="column">
              <div className="amount">{data.amount}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <PrimaryButton label="Add" onClick={handleAddItem} />
      </div>
    </>
  )
}

export default Expenses
