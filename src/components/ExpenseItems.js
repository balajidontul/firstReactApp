import "./ExpenseItem.css";
function expenceItem() {
  return (
    <div className="expense-item">
      <div>28 March 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$234.94</div>
      </div>
    </div>
  );
}

export default expenceItem;
