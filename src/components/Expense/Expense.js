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
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {
                    props.items.map( expense => <ExpenseItems title={expense.title} amount={expense.amount} date={expense.date}/>)
                }
               
            </Card>
        </div>
    )
}

export default Expense;