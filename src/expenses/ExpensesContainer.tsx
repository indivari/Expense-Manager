import React, { useState,useEffect } from 'react'
import '../css/expenses.css'
import { PrimaryButton } from '../components'
import { IExpense } from './IExpense'
import ExpenseTable from './ExpenseTable'
import InputExpenseForm from './InputExpenseForm'
import { deleteExpense, saveExpense,updateExpense } from './api'

interface ExpensesContextType {
  expenses: IExpense[];
  onUpdate?:(expense:IExpense)=>void
}

export const ExpensesContext = React.createContext<ExpensesContextType>({expenses:[]})

interface ExpensesState{
  expenses:IExpense[];
}

type ExpensesActions  =
|{type:"LOAD";expenses:IExpense[]}
|{type:"UPDATE";expense:IExpense}
|{type:"ADD";expense:IExpense}
|{type:"DELETE";id:String};

export const reducer: React.Reducer<ExpensesState,ExpensesActions>=(state:ExpensesState,action:any):ExpensesState=>{

  console.log(action,state);

  switch(action.Type){
    case "LOAD":
      return {...state,expenses:action.Expenses};
      case "ADD":
        return {...state,expenses:[...state.expenses,action.expense]};
        case "UPDATE": {
          const index=state.expenses.findIndex((e)=>e._id===action.expense._id);
              const expenses=state.expenses;
              expenses[index]=action.expense;
              return {...state, expenses};
        }
        case "DELETE":{
          const filteredArray=state.expenses.filter((item:IExpense)=>item._id!==action.id)
          return {...state, expenses:filteredArray}
        }
        default:
          return state;
          

  }
}
const ExpensesContainer = () => {
  const [showInputForm, setShowInputForm] = useState(false)
  const[expenses,setExpenses]=useState<IExpense[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/expenses")
      .then(res => res.json())
      .then(expenses => setExpenses(expenses))
}, [])

  const handleAddItem = () => {
    setShowInputForm(true)
  }

  const handleOnSave=async(exp:IExpense):Promise<void> =>{
   
const savedExpense= await saveExpense(exp);
    const newExpenses = [ ...expenses, savedExpense]
    setExpenses(newExpenses)
  }

  const handleOnDelete=async(id:string|undefined):Promise<void>=>{
    await deleteExpense(id);
    const filteredArray=expenses.filter((item:IExpense)=>item._id!==id)
    setExpenses(filteredArray)
  }

  const handleOnUpdate=async(updatedExpense:IExpense):Promise<void>=>{
     
    const editedExpense=await updateExpense(updatedExpense)
    const newExpenses = [ ...expenses, editedExpense]
    setExpenses(newExpenses)
  }

  return (
    <ExpensesContext.Provider value={{expenses,onUpdate:handleOnUpdate}}>
      <div>
        <div className="expenses">
          <h2>Recent Expenses</h2>
        </div>
        { expenses !== undefined? <ExpenseTable onDelete={(id)=>handleOnDelete(id)}/>: <b>data not loaded</b> }
      </div>
      <div className="footer">
        <PrimaryButton label="Add" onClick={handleAddItem}/>
      </div>

      {showInputForm && (
        <div>
          <InputExpenseForm onSave={handleOnSave} />
        </div>
      )}
      </ExpensesContext.Provider>
  )
}

export default ExpensesContainer
