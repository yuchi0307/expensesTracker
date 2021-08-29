import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (myExpenseData) => {
        const expenseData = {
            ...myExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false); //交出表單後也想關起來
    };

    const [isEditing, setIsEditing]= useState(false)
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const CancelHandler = (props) => {
        setIsEditing(false)
    }

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {/* 若成立 &＆ 顯示後方邏輯*/}
           {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelHandler}/>}
        </div>
    )
}

export default NewExpense;
