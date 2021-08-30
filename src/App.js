// import ExpenseItem from './Components/ExpenseItem';
import MyExpenses from "./Components/Expenses/MyExpenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "iPad Air 4",
    amount: 11533,
    date: new Date(2020, 10, 14),
  },
  { 
    id: "e2", 
    title: "iPad", 
    amount: 20000, 
    date: new Date(2021, 2, 7) 
  },
  {
    id: "e3",
    title: "apple pecncil",
    amount: 2500,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "AirPods Pro",
    amount: 7990,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <MyExpenses data={expenses} />
    </div>
  );
};

export default App;
