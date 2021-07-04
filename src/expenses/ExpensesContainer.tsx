import React, { useState,useEffect } from 'react'
import '../css/expenses.css'
import { PrimaryButton } from '../components'
import { IExpense } from './IExpense'
import ExpenseTable from './ExpenseTable'
import InputExpense from './InputExpense'


const ExpensesContainer = () => {
  const [showInputForm, setShowInputForm] = useState(false)
  const[expenses,setExpenses]=useState<IExpense[]>();

  let exp: IExpense[] = [
    { id: 1, date: new Date(), category: 'Lunch', amount: 50 },
    { id: 2, date: new Date(), category: 'travel', amount: 100 },
    { id: 3, date: new Date(), category: 'Lunch', amount: 25 },
    { id: 4, date: new Date(), category: 'clothing', amount: 200 },
  ]

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
    const result = await response.json();
    console.log(result)
    

  }

  return (
    <>
      <div>
        <div className="expenses">
          <h2>Recent Expenses</h2>
        </div>
        { expenses !== undefined? <ExpenseTable exp={expenses} />: <b>data not loaded</b> }
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
