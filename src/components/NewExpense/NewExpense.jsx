import { useState } from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const expenseDataHandler = (expenseData) => {
        const expenseDataWithId = {
            id: Math.floor(Math.random() * 10000) + 1,
            ...expenseData
        }

        props.onSetId(expenseDataWithId);
    }

    const [isEditing, setIsEditing] = useState(false);

    const unCollapseHandler = ()=> {
        setIsEditing(true);
    }

    const collapseHandler = ()=> {
        setIsEditing(false);
    }
    
    let textContent = <button onClick={unCollapseHandler}>Add New Expense</button>

    if(isEditing){
        textContent = <ExpenseForm onSaveExpense={expenseDataHandler} onCancel={collapseHandler} />
    }

    return (
        <div className='new-expense'>
            {textContent}
        </div>
    );
}

export default NewExpense;