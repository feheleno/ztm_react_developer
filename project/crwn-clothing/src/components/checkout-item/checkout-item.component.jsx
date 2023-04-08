import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Increase from '../increase/increase.component';
import Decrease from '../decrease/decrease.component';

import './checkout-item.styles.scss';
import Button from '../button/button.component';

const CheckoutItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item;
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    const addProductToCart = () => { addItemToCart(item) };
    const removeProductFromCart = () => { removeItemFromCart(item) };

    return(
        <div>
            <div><img src={imageUrl} alt={name} /></div>
            <div>{name}</div>
            <div><Button onClick={removeProductFromCart}><Decrease /></Button>{quantity}<Button onClick={addProductToCart}><Increase /></Button></div>
            <div>{price}</div>
            <div>X</div>
        </div>
    );
};

export default CheckoutItem;