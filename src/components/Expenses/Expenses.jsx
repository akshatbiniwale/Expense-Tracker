import {useState} from 'react';

import './Expenses.css'
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';

const Expenses = (props)=> {
    const [receivedYear, setReceivedYear] = useState(new Date().getFullYear().toString());

    const setYearHandler = (setYear)=> {
        setReceivedYear(setYear);
    };

    const filteredExpenses = props.expenses.filter((expense)=> {
        const year = new Date(expense.date).getFullYear();
        return year.toString() === receivedYear;
    });

    return (
        <Card className='expenses'>
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseFilter onSetYear={setYearHandler} selected={receivedYear} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;