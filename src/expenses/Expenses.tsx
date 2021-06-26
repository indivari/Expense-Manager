import React, { useState } from 'react'
import '../css/expenses.css'
import { PrimaryButton } from '../components'
import { IExpense } from './IExpense'
import ExpenseTable from './ExpenseTable'
import InputExpense from './InputExpense'

const Expenses = () => {
  const [showInputForm, setShowInputForm] = useState(false)

  let exp: IExpense[] = [
    { id: 1, date: new Date(), category: 'Lunch', amount: 50 },
    { id: 2, date: new Date(), category: 'travel', amount: 100 },
    { id: 3, date: new Date(), category: 'Lunch', amount: 25 },
    { id: 4, date: new Date(), category: 'clothing', amount: 200 },
  ]

  const handleAddItem = () => {
    setShowInputForm(true)
  }

  return (
    <>
      <div>
        <div className="expenses">
          <h2>Recent Expenses</h2>
        </div>
        <ExpenseTable exp={exp} />
      </div>
      <div className="footer">
        <PrimaryButton label="Add" onClick={handleAddItem} />
      </div>

      {showInputForm && (
        <div>
          <InputExpense />
        </div>
      )}
    </>
  )
}

export default Expenses
