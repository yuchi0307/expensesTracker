import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0" step="1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-03-07" max="2025-03-07" />
        </div>
        <div className="new_expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
