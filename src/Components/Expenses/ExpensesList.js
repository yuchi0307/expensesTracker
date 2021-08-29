import  ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) =>{

    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No expense found.</h2>
    }

    return(
        <ul className='expenses-list'>
         {props.items.map((filterExpense) => (
        <ExpenseItem
          key={filterExpense.id}
          title={filterExpense.title}
          amount={filterExpense.amount}
          date={filterExpense.date}
        />
      ))}  
        </ul>
    )
}


export default ExpensesList;