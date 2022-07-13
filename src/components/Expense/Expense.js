import ExpenseItems from '../ExpenseItems/ExpenseItems';
import Card from '../card/card';
import './Expense.css';

function Expense(props){
    return(
        <Card className='expenses'>
            <ExpenseItems title={props.title} amount={props.amount} date={props.date}/>
        </Card>
    )
}

export default Expense;