import './ExpenseDate.css'

const ExpenseDate = (props)=> {
    const gotDate = new Date(props.date);
    const month = gotDate.toLocaleString("en-US", {month: "long"});
    const day = gotDate.toLocaleString("en-US", {day: "2-digit"});
    const year = gotDate.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;