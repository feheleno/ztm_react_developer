import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {
    // const {hidden, setHidden} = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    return (
        // <div className='cart-dropdown-container' hidden={hidden} onClick={setHidden(!hidden)} >
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))}
            </div>
            <Link to={'checkout'}>
                <Button to='checkout'>GO TO CHECKOUT</Button>
            </Link>
        </div>
    )
}

export default CartDropdown;