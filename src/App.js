import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import ExpenseNew from './components/Expense/ExpenseNew/ExpenseNew';

const expenses_Data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenseData,setExpenseData]= useState(expenses_Data);
  // prevExpenses - receives the latest state sna
  const updateExpenseData = (expense) => {
    setExpenseData( prevExpenses => { 
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <ExpenseNew onAddExpense={updateExpenseData}/>
      <Expense items={expenseData}/>
    </div>
  );
}

export default App;
