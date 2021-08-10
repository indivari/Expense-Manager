import React, { useContext, useState } from "react";
import DatePick from "./DatePick";
import { IExpense } from "./IExpense";
import "../css/UpdateExpense.css";
import { ExpensesContext } from "./ExpensesContainer";

interface ComponentProps {
  expense: IExpense;
  isUpdateMode: boolean;
}

export const UpdateExpenseForm: React.FC<ComponentProps> = ({
  expense,
  isUpdateMode,
}) => {
  const [category, setCategory] = useState(expense.category);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState<Date>(
    expense.date ? new Date(expense.date) : new Date()
  );

  const values = useContext(ExpensesContext);

  const handleOnUpdate = () => {
    const updatedExpense: IExpense = {
      _id: expense._id,
      date,
      category,
      amount,
    };
    values.onUpdate && values.onUpdate(updatedExpense);
  };

  const handleAmountChange = (e: any) => {
    if (e.target.value === "") {
      setAmount(0);
    } else {
      setAmount(parseFloat(e.target.value));
    }
  };
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="edit-date">
            <DatePick onChange={(date) => setDate(date)} value={date} />
          </div>
        </div>

        <div className="column">
          <div className="edit-category">
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="column">
          <div className="edit-amount">
            <input
              type="text"
              value={amount}
              onChange={(e) => handleAmountChange(e)}
            />
          </div>
        </div>

        <div className="column">
          <div></div>
        </div>
        <div className="column">
          <div></div>
        </div>
      </div>
      <div className="row">
        <div className="btn-save">
          <button onClick={() => handleOnUpdate()}>Save</button>
        </div>
      </div>
    </div>
  );
};
