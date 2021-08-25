import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
import "./MyExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';

const MyExpenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2021')
  const ChangeHandler = SelectedYear => {
    setFilteredYear(SelectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter myYear={filteredYear} onChaneFilter={ChangeHandler} />
        {props.data.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default MyExpenses;
