import './App.css';
import Expense from './components/Expense/Expense';
import ExpenseNew from './components/Expense/ExpenseNew/ExpenseNew';

function App() {
  const expenses = [
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

  const saveExpenseData = (expense) => {
  console.log("🚀 ~ file: App.js ~ line 29 ~ saveExpenseData ~ expense", expense)
    
  }

  return (
    <div className="App">
      <ExpenseNew onAddExpense={saveExpenseData}/>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
