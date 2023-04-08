import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import Increase from "../increase/increase.component";
import Decrease from "../decrease/decrease.component";
import Button from "../button/button.component";
import Remove from "../remove/remove.component";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const { increaseItemToCart, decreaseItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const increaseProductToCart = () => {
    increaseItemToCart(item);
  };
  const decreaseProductFromCart = () => {
    decreaseItemFromCart(item);
  };
  const removeProductFromCart = () => {
    removeItemFromCart(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <Button buttonType="checkout_item" onClick={decreaseProductFromCart}>
          <Decrease />
        </Button>
        <span className="value">{quantity}</span>
        <Button buttonType="checkout_item" onClick={increaseProductToCart}>
          <Increase />
        </Button>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button">
        <Button buttonType="checkout_item" onClick={removeProductFromCart}>
          <Remove />
        </Button>
      </div>
    </div>
  );
};

export default CheckoutItem;
