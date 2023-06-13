import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = ()=> {
  const dummyExpenses = [];

  const [expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense)=> {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSetId={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
