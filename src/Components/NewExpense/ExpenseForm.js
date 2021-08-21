import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {

  // const [enteredTitle, setEnteredTitle] = useState(''); //一開始欄位都是空白，所以給空字串
  // const [enteredAmount, setEnteredAmount] = useState(''); //即便輸入的看似是數字，但型態依舊是字串
  // const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) =>{
    //setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
      //在 react 中，這個 state 被更新了，若沒有顧及其他兩個物件，新的 state 將不會保留就有的其他物件
      //所以將更新 state 時，用...userInput先保留所有物件，再 override title，以此類推
    });
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  };

  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    })

  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0" step="1" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-03-07" max="2025-03-07" onChanege={dateChangeHandler}/>
        </div>
        <div className="new_expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
