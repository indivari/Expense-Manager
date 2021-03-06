import React, { useState } from "react";
import "../css/expenses.css";
import "../css/tableRow.css";
import { IExpense } from "./IExpense";
import { DeleteButton } from "../components/DeleteButton";
import { UpdateButton } from "../components/UpdateButton";
import { UpdateExpenseForm } from "./UpdateExpenseForm";

interface ComponentProps {
  onDelete: (id: string | undefined) => void;
  expense: IExpense;
}

const TableRow: React.FC<ComponentProps> = ({ expense, onDelete }) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const { category, amount } = expense;
  const date = expense.date ? new Date(expense.date).toDateString() : "";

  return (
    <div>
      {!isUpdateMode && (
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
              <DeleteButton
                label="Delete"
                onClick={() => onDelete(expense._id)}
              />
            </div>
          </div>
          <div className="column">
            <div className="edit">
              <UpdateButton
                label="Update"
                onClick={() => setIsUpdateMode(true)}
              />
            </div>
          </div>
        </div>
      )}

      {isUpdateMode && (
        <div>
          <UpdateExpenseForm expense={expense} isUpdateMode={isUpdateMode} />
        </div>
      )}
    </div>
  );
};

export default TableRow;
