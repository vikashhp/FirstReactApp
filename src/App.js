
import "./App.css";

import Expenses from "./components/Expense/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

import {useState} from 'react';

const dummy_data = [
  {
    id:'e1',
    title: "Car Insurance",
    amount: 297.54,
    date: new Date(2020, 2, 15),
    
  },
  {
    id:'e2',
    title: "Samsung TV",
    amount: 450,
    date: new Date(2023, 4, 17),
    
  },
  {
    id:'e3',
    title: "Laptop",
    amount: 700,
    date: new Date(2022, 7, 18),
    
  },
  {
    id:'e4',
    title: "Chair",
    amount: 27.54,
    date: new Date(2021, 9, 10),
  
  },
];


const App = () => {
 
  const [expenses,setExpenses]=useState(dummy_data)

  

  const addExpensedata = expense => {

   setExpenses((previousExpense)=>{
    return [expense,...previousExpense]
   })
   
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpensedata} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
