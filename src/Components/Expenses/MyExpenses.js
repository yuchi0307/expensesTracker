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
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        />
      </Card>
    </div>
  );
};

export default MyExpenses;
