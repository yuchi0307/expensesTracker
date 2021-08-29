import "./ExpenseItem";
import "./MyExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const MyExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const ChangeHandler = (SelectedYear) => {
    setFilteredYear(SelectedYear);
  };

  const filteredExpense = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      
        <Card className="expenses">
          <ExpensesFilter myYear={filteredYear} onChaneFilter={ChangeHandler} />
          <ExpensesList items={filteredExpense} />
        </Card>
      
    </div>
  );
};

export default MyExpenses;
