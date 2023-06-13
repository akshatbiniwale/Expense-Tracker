import {useState} from 'react';

import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props)=> {
    const [receivedYear, setReceivedYear] = useState('2020');

    const setYearHandler = (setYear)=> {
        setReceivedYear(setYear);
    };

    return (
        <Card className='expenses'>
            <ExpenseFilter onSetYear={setYearHandler} selected={receivedYear} />
            {props.expenses.map((expense)=> {
                return (
                    <ExpenseItem 
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                );
            })}
        </Card>
    );
}

export default Expenses;