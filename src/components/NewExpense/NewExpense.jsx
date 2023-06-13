import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const expenseDataHandler = (expenseData) => {
        const expenseDataWithId = {
            ...expenseData,
            id: Math.floor(Math.random() * 10000) + 1
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