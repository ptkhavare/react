import React from "react";

function ExpenseItem() {
  //only one root component allowed in jsx
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
