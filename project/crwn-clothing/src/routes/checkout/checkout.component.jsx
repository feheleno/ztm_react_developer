import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, totalCartValue } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <div>
        Total Cart Value: {totalCartValue}
      </div>
    </div>
  );
};

export default Checkout;
