import React, { useState, useEffect, useReducer } from "react";
import "../css/expenses.css";
import { PrimaryButton } from "../components";
import { IExpense } from "./IExpense";
import ExpenseTable from "./ExpenseTable";
import InputExpenseForm from "./InputExpenseForm";
import { deleteExpense, saveExpense, updateExpense } from "./api";

interface ExpensesContextType {
  expenses: IExpense[];
  onUpdate?: (expense: IExpense) => void;
}

export const ExpensesContext = React.createContext<ExpensesContextType>({
  expenses: [],
});

interface ExpensesState {
  expenses: IExpense[];
}

type ExpensesActions =
  | { type: "LOAD"; expenses: IExpense[] }
  | { type: "UPDATE"; expense: IExpense }
  | { type: "ADD"; expense: IExpense }
  | { type: "DELETE"; id: String };

export const reducer: React.Reducer<ExpensesState, ExpensesActions> = (
  state: ExpensesState,
  action: ExpensesActions
): ExpensesState => {
  console.log(action, state);

  switch (action.type) {
    case "LOAD":
      return { ...state, expenses: action.expenses };
    case "ADD":
      return { ...state, expenses: [...state.expenses, action.expense] };
    case "UPDATE": {
      const index = state.expenses.findIndex(
        (e) => e._id === action.expense._id
      );
      const expenses = state.expenses;

      expenses[index] = action.expense;
      return { ...state, expenses };
    }
    case "DELETE": {
      const filteredArray = state.expenses.filter(
        (item: IExpense) => item._id !== action.id
      );
      return { ...state, expenses: filteredArray };
    }
    default:
      return state;
  }
};

const initialState: ExpensesState = { expenses: [] };

const ExpensesContainer = () => {
  const [showInputForm, setShowInputForm] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3000/api/expenses")
      .then((res) => res.json())
      .then((expenses) => dispatch({ type: "LOAD", expenses }));
  }, []);

  const handleAddItem = () => {
    setShowInputForm(true);
  };

  const handleOnSave = async (exp: IExpense): Promise<void> => {
    const savedExpense = await saveExpense(exp);

    dispatch({ type: "ADD", expense: savedExpense });
    setShowInputForm(false);
  };

  const handleOnDelete = async (id: string | undefined): Promise<void> => {
    await deleteExpense(id);
    !!id && dispatch({ type: "DELETE", id });
  };

  const handleOnUpdate = async (expense: IExpense): Promise<void> => {
    await updateExpense(expense);
    dispatch({ type: "UPDATE", expense });
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses: state.expenses, onUpdate: handleOnUpdate }}
    >
      <div>
        <div className="expenses">
          <h1>Recent Expenses</h1>
        </div>
        <ExpenseTable onDelete={(id) => handleOnDelete(id)} />
      </div>
      <div className="footer">
        <PrimaryButton label="Add" onClick={handleAddItem} />
      </div>

      {showInputForm && (
        <div>
          <InputExpenseForm onSave={handleOnSave} />
        </div>
      )}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContainer;
