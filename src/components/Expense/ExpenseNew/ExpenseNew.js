import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './ExpenseNew.css';

const ExpenseNew = (props) =>{

    const saveExpenseDataHandler = (expenseData) =>{
        const updatedExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(updatedExpenseData);
        
    }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>  
    </div>
  )
}

export default ExpenseNew