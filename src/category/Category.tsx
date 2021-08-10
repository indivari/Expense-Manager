import React, { useState } from "react";

const Category = () => {
  const [expenses, setExpense] = useState([]);

  return (
    <div className="category">
      <h1>Expenses by Category</h1>
    </div>
  );
};

export default Category;
