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

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={expenseDataHandler} />
        </div>
    );
}

export default NewExpense;