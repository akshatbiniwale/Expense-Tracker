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
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;