

import React,{useState}  from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)

  const addToCart = ()=>{
    setCart(true);
    
  }

  return (
    <li className={inCart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;