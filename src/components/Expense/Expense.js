import { useState } from 'react';
import ExpenseItems from '../ExpenseItems/ExpenseItems';
import Card from '../card/card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import './Expense.css';
import Chart from '../Chart/Chart';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expense = (props) => {
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
                <ExpensesChart expenses={filteredItems}/>
                {dataContent}
            </Card>
        </div>
    )
}

export default Expense;