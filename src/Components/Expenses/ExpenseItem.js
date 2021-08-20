import React, {useState} from 'react';
import './ExpensesDate.js';
import './ExpenseItem.css';
import Card from '../UI/Card.js';
import ExpensesDate from './ExpensesDate.js';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('看看state的運作和出現次數')

  const clickHandler = () =>{
    setTitle('狗狗');
    console.log(title)
  }

  return (
    <Card className='expense-item'>
     <ExpensesDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
