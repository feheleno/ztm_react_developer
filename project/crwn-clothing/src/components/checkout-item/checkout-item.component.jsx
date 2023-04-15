import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import {
  DecreaseProductIcon,
  IncreaseProductIcon,
  RemoveProductIcon,
} from '../icons/icons.component';
import {
  CheckoutItemContainer,
  DecreaseSign,
  IncreaseSign,
  ImageContainer,
  Name,
  Quantity,
  Value,
  Price,
  RemoveSign,
  Img,
} from './checkout-item.styles';

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
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <DecreaseSign onClick={decreaseProductFromCart}>
          <DecreaseProductIcon />
        </DecreaseSign>
        <Value>{quantity}</Value>
        <IncreaseSign onClick={increaseProductToCart}>
          <IncreaseProductIcon />
        </IncreaseSign>
      </Quantity>
      <Price>{price}</Price>
      <RemoveSign onClick={removeProductFromCart}>
        <RemoveProductIcon />
      </RemoveSign>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
