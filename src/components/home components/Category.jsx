import React from "react";
import "./Category.css";

function Category({ cat, category, setCategory }) {
  return (
    <div className="category" onClick={() => setCategory(cat.name)}>
      <div className="category-icon">{cat?.icon}</div>
      <h5>{cat.name}</h5>
    </div>
  );
}

export default Category;
