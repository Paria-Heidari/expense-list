import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [updatedTitle, setUpdateTitle] = useState('');
    const [updatedAmount, setUpdatedAmount] = useState('');
    const [updatedDate, setUpdatedDate] = useState ('');

// Using oneState
    // const [formData, setFormData] = useState({
    //     updatedTitle: '',
    //     updatedAmount: '',
    //     updateDate: '',
    // })

    
    const updateTitle = (event) =>{
        setUpdateTitle(event.target.value);
// Using oneState - updating state that depend on the prev. state
    // setFormData(prevState => {
    //     return{
    //         ...prevState,
    //         updatedTitle:event.target.value
    //     }
    // })
    }

    const updateAmount = event =>{
        setUpdatedAmount(event.target.value);
// Using oneState - updating state that depend on the prev. state
    // setFormData( (prevState) =>{
    //     return {
    //         ...prevState,
    //         updatedAmount:event.target.value
    //     }
    // })
    }

    const updateDate = event =>{
        setUpdatedDate(event.target.value);

 // Using oneState - updating state that depend on the prev. state
    //    setFormData( prevState =>{
    //        return{
    //         ...prevState,
    //         updatedDate:event.target.value
    //        }
    //    })
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData ={
            title: updatedTitle,
            amount: updatedAmount,
            date: new Date(updatedDate)
        };
        props.onSaveExpenseData(expenseData);
        setUpdateTitle('');
        setUpdatedAmount('');
        setUpdatedDate('');
        
    }


  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Title </label>
                <input type='text' value={updatedTitle} onChange={updateTitle}/>
            </div>
            <div className='new-expense__control'>
                <label> Amount</label>
                <input type='number' min='0.01' step='0.01' value={updatedAmount} onChange={updateAmount}/>
            </div>
            <div className='new-expense__control'>
                <label> Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={updatedDate} onChange={updateDate}/>
            </div>
        </div>
        <div className='new-expense--action'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm