import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filtredYear
  })


  let expenseContent=<p className="paragraph">Only a single Expense Here</p>
    
  if(filteredExpense.length > 0){
    expenseContent=filteredExpense.map((expense)=>{
      <ExpenseItem
       key={expense.id}
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
      />
    })
  }









  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filtredYear}
          onChangeFilter={filterChangedHandler}
        ></ExpenseFilter>
        
        {expenseContent}

        <ExpenseChart expenses={filteredExpense}/>
       
      </Card>
    </div>
  );
};

export default Expenses;
