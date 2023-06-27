import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filtredYear}
          onChangeFilter={filterChangedHandler}
        ></ExpenseFilter>

        {props.items.map((expense) => (
          <ExpenseItem
            
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

       
      </Card>
    </div>
  );
};

export default Expenses;
