import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

const NewExpense=(props)=>{
   
    const Expense_data_Handler=(eventHandle)=>{
     
        const data_received={
            ...eventHandle,
            id:Math.random().toString()
        }

        // console.log(data_received)
        props.onAddExpense(data_received)


    }




    return <div className="new-expense">
    <NewExpenseForm onSaveExpenseData={Expense_data_Handler}/>

    </div>

}

export default NewExpense;