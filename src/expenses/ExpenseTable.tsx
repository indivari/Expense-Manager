import React from 'react'
import TableRow from './TableRow'
import { IExpense } from './IExpense'

const ExpenseTable = (props: { exp: IExpense[] }) => {
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

        {props.exp.map((data: IExpense) => (
          <TableRow data={data} />
        ))}
      </div>
    </>
  )
}
export default ExpenseTable
