import './ExpensesDate.js';
import './ExpenseItem.css';
import Card from './Card.js';
import ExpensesDate from './ExpensesDate.js';

function ExpenseItem(props) {


  return (
    <Card className='expense-item'>
     <ExpensesDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
