import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const yearChangeHandler = (event)=> {
        props.onSetYear(event.target.value);
    };

    const currentYear = Number(new Date().getFullYear());
    const yearList = [];

    for(var i=1; i<=4; i++){
        yearList.push(currentYear-i);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    {yearList.map((year)=> {
                        return(
                            <option value={year.toString()}>{year}</option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;