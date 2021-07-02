import React from 'react'
import '../css/expenses.css'
import '../css/tableRow.css'
import { IExpense } from './IExpense'

const TableRow = (props: { data: IExpense }) => {
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="date">{new Date(props.data.date).toDateString()}</div>
        </div>

        <div className="column">
          <div className="category">{props.data.category}</div>
        </div>

        <div className="column">
          <div className="amount">{props.data.amount}</div>
        </div>
      </div>
    </div>
  )
}

export default TableRow
