import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
let expense=[
  {
    title:'Car Insurance',
    amount:297.54,
    date:new Date(2020,2,15),
    location:'New Delhi'
  },
  {
    title:'Samsung TV',
    amount:450,
    date:new Date(2023,4,17),
    location:'Kolkata'
  },
  {
    title:'Laptop',
    amount:700,
    date:new Date(2022,7,18),
    location:'Hazaribagh'
  },
  {
    title:'Chair',
    amount:27.54,
    date:new Date(2021,9,10),
    location:'Surat'
  },
];



  return (
    <div className="App">
     
        <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} location={expense[0].location}></ExpenseItem>
             
        <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} location={expense[1].location}></ExpenseItem>
             
        <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} location={expense[2].location}></ExpenseItem>
          
        <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} location={expense[3].location}></ExpenseItem>
    
      
    </div>
  );
}

export default App;
