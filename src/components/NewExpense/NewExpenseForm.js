import './NewExpenseForm.css'
import {useState} from 'react'

const NewExpenseForm=()=>{
    const [enteredTitle,SetTitle] =useState('');
    const [enteredAmount,SetAmount]=useState('');
    const [enteredDate,SetDate]=useState('');


    
    const titleChangeHandler=(event)=>{
        // console.log(event.target.value);
        SetTitle(event.target.value)
      
    }
    const amountChangeHandler=(event)=>{
        // console.log(event.target.value);
        SetAmount(event.target.value)
      
    }

    const dateChangeHandler=(event)=>{
        // console.log(event.target.value);
        SetDate(event.target.value)
      
    }

    const submitHandler=(event)=>{
        
        event.preventDefault();

       const Expense_data={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
       }
        
       console.log(Expense_data)



    }




return(
   <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__controls">
            <label className="new-expense__control label">Title</label>
             <input type="text" className="new-expense__control input" onChange={titleChangeHandler}/>
        </div>


        <div className="new-expense__controls">
            <label className="new-expense__control label">Amount</label>
             <input type="number" className="new-expense__control input" onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__controls">
            <label className="new-expense__control label">Date</label>
             <input type="date" className="new-expense__control input" onChange={dateChangeHandler}/>
        </div>

      </div>

      <button type="submit">Add Expense</button>

  </form>

)



}

export default NewExpenseForm;