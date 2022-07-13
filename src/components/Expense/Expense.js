import ExpenseItems from '../ExpenseItems/ExpenseItems';
import Card from '../card/card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import './Expense.css';
import { useState } from 'react';

function Expense(props){
    const [filteredYear, setFilteredYear] = useState('2019');
    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }


    return(
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItems title={props.title} amount={props.amount} date={props.date}/>
        </Card>
    )
}

export default Expense;