import React from 'react'
import '../css/expenses.css'
import '../css/tableRow.css'
import { IExpense } from './IExpense'

const TableRow = ({ data }: { data: IExpense }) => {
  const { category, amount } = data;
  const date = data.date? new Date(data.date).toDateString(): "";

  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="date">{date}</div>
        </div>

        <div className="column">
          <div className="category">{category}</div>
        </div>

        <div className="column">
          <div className="amount">{amount}</div>
        </div>
      </div>
    </div>
  )
}

export default TableRow
