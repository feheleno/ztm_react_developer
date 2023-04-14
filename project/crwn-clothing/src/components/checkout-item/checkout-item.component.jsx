import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import IncreaseIcon from "../increase/increase.component";
import DecreaseIcon from "../decrease/decrease.component";
import Button from "../button/button.component";
import RemoveIcon from "../remove/remove.component";
import { CheckoutItemContainer, DecreaseSign, IncreaseSign, ImageContainer, Name, Quantity, Value, Price, RemoveSign } from './checkout-item.styles';



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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <DecreaseSign onClick={decreaseProductFromCart}>
          <DecreaseIcon />
        </DecreaseSign>
        <Value>{quantity}</Value>
        <IncreaseSign onClick={increaseProductToCart}>
          <IncreaseIcon />
        </IncreaseSign>
      </Quantity>
      <Price>{price}</Price>
      <RemoveSign>
        <Button buttonType="checkout_item" onClick={removeProductFromCart}>
          <RemoveIcon />
        </Button>
      </RemoveSign>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
