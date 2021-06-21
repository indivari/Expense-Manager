import React from 'react'

const ExpenseTable = () => {
  type Expense = {
    id: number
    date: Date
    category: string
    amount: number
  }

  let exp: Expense[] = [
    { id: 1, date: new Date(), category: 'Lunch', amount: 50 },
    { id: 2, date: new Date(), category: 'travel', amount: 100 },
    { id: 3, date: new Date(), category: 'Lunch', amount: 25 },
    { id: 4, date: new Date(), category: 'clothing', amount: 200 },
  ]

  return (
    <>
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
    </>
  )
}
export default ExpenseTable
