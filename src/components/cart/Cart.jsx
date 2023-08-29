import React, { useState } from 'react';
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png"; import burger2 from "../../assets/burger2.png"; import burger3 from "../../assets/burger3.png";
const CartItem = ({ value, title, img, increment, decrement }) => (
<div className="cartItem">
<div>
<h4>{title}</h4>
<img src={img} alt="Item" />
</div>
<div>
<button onClick={decrement}>-</button>
<input type="number" readOnly value={value} />
<button onClick={increment}>+</button>
</div>
</div>
);
const Cart = () => {

  const [itemValues, setItemValues] = useState([0, 0, 0]); // Initial values for each item

  const increment = (index) => {
    const newValues = [...itemValues];
    newValues[index] += 1;
    setItemValues(newValues);
  };

  const decrement = (index) => {
    const newValues = [...itemValues];
    if (newValues[index] > 0) {
      newValues[index] -= 1;
      setItemValues(newValues);
    }
  };

  const itemPrices = [200, 500, 600];

  const subTotal = itemValues.reduce((total, value, index) => total + value * itemPrices[index], 0);
  const tax = subTotal * 0.18;
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;

return (
<section className="cart">
<main>
<CartItem
title={"Cheese Burger"} img={burger1} value={itemValues[0]}
increment={() => increment(0)} decrement={() => decrement(0)}
/>
<CartItem
title={"Veg Cheese Burger"} img={burger2}
value={itemValues[1]}
increment={() => increment(1)} decrement={() => decrement(1)}
/>
<CartItem
title={"Cheese Burger with French Fries"} img={burger3}
value={itemValues[2]}
increment={() => increment(2)}
decrement={() => decrement(2)}
/>
<article>
<div>
<h4>Sub Total</h4>
<p>₹{subTotal}</p>
</div>
<div>
<h4>Tax</h4>
<p>₹{tax}</p>
</div>
<div>
<h4>Shipping Charges</h4>
<p>₹{shippingCharges}</p>
</div>{" "}
<div>
<h4>Total</h4>
<p>₹{total}</p>
</div>
<Link to="/shipping">Checkout</Link>
</article>
</main>
</section>
);
};
export default Cart;
