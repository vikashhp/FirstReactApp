import './NewExpenseForm.css'

const NewExpenseForm=()=>{
  
    const clickHandler=(event)=>{
        console.log(event.target.value);
    }



return(
   <form>
      <div className="new-expense__controls">

        <div className="new-expense__controls">
            <label className="new-expense__control label">Title</label>
             <input type="text" className="new-expense__control input" onChange={clickHandler}/>
        </div>


        <div className="new-expense__controls">
            <label className="new-expense__control label">Amount</label>
             <input type="number" className="new-expense__control input" />
        </div>

        <div className="new-expense__controls">
            <label className="new-expense__control label">Date</label>
             <input type="date" className="new-expense__control input"/>
        </div>

      </div>

      <button type="submit">Add Expense</button>

  </form>

)



}

export default NewExpenseForm;