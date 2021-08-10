import React from "react";
import TableRow from "./TableRow";
import { IExpense } from "./IExpense";
import { useContext } from "react";
import { ExpensesContext } from "./ExpensesContainer";

interface ComponentProps {
  onDelete: (id: string | undefined) => void;
}

const ExpenseTable: React.FC<ComponentProps> = ({ onDelete }) => {
  const values = useContext(ExpensesContext);

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

        {values.expenses.map((data: IExpense) => (
          <TableRow expense={data} onDelete={(id) => onDelete(id)} />
        ))}
      </div>
    </>
  );
};
export default ExpenseTable;
