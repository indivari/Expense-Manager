import React from 'react'
import '../css/expenses.css'
import '../css/tableRow.css'
import { IExpense } from './IExpense'
import {DeleteButton} from '../components/DeleteButton'


interface ComponentProps {
  onDelete: (id: string|undefined) => void;
  data:IExpense
}

const TableRow :React.FC<ComponentProps>= ({ data ,onDelete}) => {
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
        <div className="column">
          <div className="delete">
            <DeleteButton label="Delete" onClick={()=>onDelete(data._id)}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TableRow
