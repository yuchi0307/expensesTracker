import './ExpensesDate.js';
import './ExpenseItem.css';
import ExpensesDate from './ExpensesDate.js';

function ExpenseItem(props) {


  return (
    <div className='expense-item'>
     <ExpensesDate date={props.date}/>
      <div className='xpense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
