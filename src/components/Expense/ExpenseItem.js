import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem=(props)=>{
   
  const clickHandler=()=>{
    console.log('chunnu')
  }
  
    return (
        <Card className="expense-item">
         
         <ExpenseDate date={props.date}></ExpenseDate>
          <div className="expense-item__description">
            <h2 className="expense-item h2">{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <div>{props.location}</div>
            <button onClick={clickHandler}>Delete Expense</button>
          </div>
            
            
        </Card>
    )
}

export default ExpenseItem;


