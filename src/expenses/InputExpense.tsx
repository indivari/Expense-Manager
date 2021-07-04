import React, { useState } from 'react'
import DatePick from './DatePick'
import { PrimaryButton } from '../components'
import { react } from '@babel/types'
import { IExpense } from './IExpense'

interface ComponentProps {
  onSave: (exp: IExpense) => void;
}

const InputExpense: React.FC<ComponentProps> = ({ onSave }) => {
  const[category,setCategory]=useState("");
  const[amount,setAmount]=useState(0);
  const[date,setDate]=useState<Date>();

  
  const handleSaveExpense=()=>{
   const newExp: IExpense ={date,category,amount}
   onSave(newExp) 
  }

  return (
    <div className="inputRow">
      <div className="row">
        <div className="column">
          <div className="date-header">
            <DatePick onChange={(date)=>setDate(date)} selectedDate={date}/>
          </div>
        </div>

        <div className="column">
          <div className="category-header">
            <input type="text" onChange={(e)=>setCategory(e.target.value)}/>
          </div>
        </div>

        <div className="column">
          <div className="amount-header">
            <input type="text" onChange={(e)=>setAmount(parseFloat(e.target.value))}/>
          </div>
        </div>
      </div>
      <div className="footer">
        <PrimaryButton label="Save" onClick={handleSaveExpense}/>
      </div>
    </div>
    
  )
}

export default InputExpense
