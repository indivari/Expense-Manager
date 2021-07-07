import React, { useState,useEffect } from 'react'
import '../css/expenses.css'
import { PrimaryButton } from '../components'
import { IExpense } from './IExpense'
import ExpenseTable from './ExpenseTable'
import InputExpense from './InputExpense'


const ExpensesContainer = () => {
  const [showInputForm, setShowInputForm] = useState(false)
  const[expenses,setExpenses]=useState<IExpense[]>([]);
  const [updated,setUpdated]=useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/api/expenses")
      .then(res => res.json())
      .then(expenses => setExpenses(expenses))
}, [])

  const handleAddItem = () => {
    setShowInputForm(true)
  }

  const handleOnSave=async(exp:IExpense):Promise<void> =>{
    console.log("Data saved",exp)

    const response = await fetch("http://localhost:3000/api/expenses", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(exp) // body data type must match "Content-Type" header
    });
    const savedExpense = await response.json();
    console.log(savedExpense) 

    const newExpenses = [ ...expenses, savedExpense]
    setExpenses(newExpenses)
  }

  const handleOnDelete=async(id:string|undefined):Promise<void>=>{
    console.log("id received", id)
    const response=await fetch("http://localhost:3000/api/expenses/"+id,{
      method:'DELETE',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'}
    })

    const filteredArray=expenses.filter((item:IExpense)=>item._id!==id)
    setExpenses(filteredArray)

  }

  return (
    <>
      <div>
        <div className="expenses">
          <h2>Recent Expenses</h2>
        </div>
        { expenses !== undefined? <ExpenseTable exp={expenses} onDelete={(id)=>handleOnDelete(id)}/>: <b>data not loaded</b> }
      </div>
      <div className="footer">
        <PrimaryButton label="Add" onClick={handleAddItem}/>
      </div>

      {showInputForm && (
        <div>
          <InputExpense onSave={handleOnSave} />
        </div>
      )}
    </>
  )
}

export default ExpensesContainer
