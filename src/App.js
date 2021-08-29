// import ExpenseItem from './Components/ExpenseItem';
import MyExpenses from './Components/Expenses/MyExpenses';
import NewExpense from './Components/NewExpense/NewExpense';
import { useState } from 'react';
  const DUMMY_EXPENSE = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }



  return (
    <div>
      <NewExpense onAddExpense={ addExpenseHandler }/>
      <MyExpenses data={expenses}/>
    </div>
  );
}

export default App;
