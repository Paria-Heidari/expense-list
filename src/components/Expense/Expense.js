import ExpenseItems from '../ExpenseItems/ExpenseItems';
import Card from '../card/card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import './Expense.css';
import { useState } from 'react';

const Expense = (props) => {
    console.log("🚀 ~ file: Expense.js ~ line 8 ~ Expense ~ props", props)
    const [filteredYear, setFilteredYear] = useState('2019');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredItems = props.items.filter(expense =>{
         return expense.date.getFullYear().toString() === filteredYear;
    });

    let dataContent = <p style={{color:"red"}}>No expenses found!</p>;
    if(filteredItems.length > 0){
        dataContent =  filteredItems.map(expense => 
            <ExpenseItems key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {dataContent}
            </Card>
        </div>
    )
}

export default Expense;