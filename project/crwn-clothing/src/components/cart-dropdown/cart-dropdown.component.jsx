import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  CartButton,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  // const {hidden, setHidden} = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    // <div className='cart-dropdown-container' hidden={hidden} onClick={setHidden(!hidden)} >
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <CartButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
