import React from 'react'

const Expenses = () => {
  return (
    <>
      <div className="expenses">
        <h1>Recent Expenses</h1>
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
    </>
  )
}

export default Expenses
