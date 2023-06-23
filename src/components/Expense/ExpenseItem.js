import {useState} from 'react';
import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem=(props)=>{

 const [title,setTitle] = useState(props.title);
 const [amount,setAmount]=useState(props.amount)
   
  const clickHandler=()=>{
     setTitle('Updated!');
     console.log(title)
  }
   
  const changeExpense=()=>{
     setAmount('100')
  }

    return (
     
        <Card className="expense-item">
         
         <ExpenseDate date={props.date}></ExpenseDate>
          <div className="expense-item__description">
            <h2 className="expense-item h2">{title}</h2>
            <div className="expense-item__price">${amount}</div>
            <div>{props.location}</div>
            <button onClick={clickHandler}>Delete Expense</button>
            <button onClick={changeExpense}>changes Expense</button>
          </div>
            
            
        </Card>
        
    )
}

export default ExpenseItem;


