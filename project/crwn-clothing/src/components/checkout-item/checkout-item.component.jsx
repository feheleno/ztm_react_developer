import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Increase from '../increase/increase.component';
import Decrease from '../decrease/decrease.component';

import './checkout-item.styles.scss';
import Button from '../button/button.component';
import Remove from '../remove/remove.component';

const CheckoutItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item;
    const { increaseItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);

    const increaseProductToCart = () => { increaseItemToCart(item) };
    const decreaseProductFromCart = () => { decreaseItemFromCart(item) };
    const removeProductFromCart = () => { removeItemFromCart(item) };

    return(
        <div>
            <div><img src={imageUrl} alt={name} /></div>
            <div>{name}</div>
            <div><Button onClick={decreaseProductFromCart}><Decrease /></Button>{quantity}<Button onClick={increaseProductToCart}><Increase /></Button></div>
            <div>{price}</div>
            <div><Button onClick={removeProductFromCart}><Remove /></Button></div>
        </div>
    );
};

export default CheckoutItem;