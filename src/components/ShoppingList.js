import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterCategory, setfilterCategory] = useState("All");

  const handleFilterCategory = (e) => {
    setfilterCategory(e.target.value);
  };

  const showItems = items.filter((item) => {
    if (filterCategory === "All") {
      return true;
    } else {
      return item.category === filterCategory;
    }
  });

  const itemLis = showItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">{itemLis}</ul>
    </div>
  );
}

export default ShoppingList;
