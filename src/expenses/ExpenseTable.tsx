import React from 'react'
import TableRow from './TableRow'
import { IExpense } from './IExpense'


interface ComponentProps {
  onDelete: (id: string|undefined) => void;
  exp:IExpense[]
}
const ExpenseTable:React.FC<ComponentProps> = ({exp,onDelete}) => {
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
          <div className="column">
            <div className="delete"></div>
          </div>
          <div className="column">
            <div className="edit"></div>
          </div>
        </div>

        {exp.map((data: IExpense) => (
          <TableRow expense={data} onDelete={(id)=>onDelete(id)}/>
      
        ))}
      </div>
    </>
  )
}
export default ExpenseTable
