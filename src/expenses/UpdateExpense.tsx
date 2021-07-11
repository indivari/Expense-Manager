import React,{ useState} from 'react'
import DatePick from './DatePick'
import { IExpense } from './IExpense';
import '../css/UpdateExpense.css';


interface ComponentProps {
    expense:IExpense
    onUpdate: (exp: IExpense) => void;
    
  }
  
const UpdateExpense:React.FC<ComponentProps>=({expense: exp,onUpdate})=>{
  const[category,setCategory]=useState(exp.category);
  const[amount,setAmount]=useState(exp.amount);
  const[date,setDate]=useState<Date>(exp.date? new Date(exp.date) : new Date());

const handleOnUpdate=()=>{
    const updatedExpense:IExpense={ _id: exp._id, date, category, amount}
    onUpdate(updatedExpense)
}

return(        
<div>
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
    <div className="row">
    <div className="btn-save"><button onClick={()=>handleOnUpdate()}>Save</button></div>
    </div>
</div>
    )
}

export default UpdateExpense;