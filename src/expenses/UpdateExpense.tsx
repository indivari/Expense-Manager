import React,{useState} from 'react'
import DatePick from './DatePick'
import { IExpense } from './IExpense';
import '../css/UpdateExpense.css';

const UpdateExpense=(exp:IExpense)=>{
  const[category,setCategory]=useState(exp.category);
  const[amount,setAmount]=useState(exp.amount);
  const[date,setDate]=useState<Date>(exp.date? new Date(exp.date) : new Date());

return(        
<div>
    <form>
    <div className="row">
        <div className="column">
          <div className="edit-date"><DatePick onChange={(date)=>setDate(date)} value={date}/></div>
        </div>

        <div className="column">
          <div className="edit-category"><input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/></div>
        </div>

        <div className="column">
          <div className="edit-amount"><input type="text" value={amount} onChange={(e)=>setAmount(parseFloat(e.target.value))}/></div>
        </div>
        
        <div className="column">
            <div></div>
        </div>
        <div className="column">
            <div></div>
        </div>
    </div>
    </form>
</div>
    )
}

export default UpdateExpense;