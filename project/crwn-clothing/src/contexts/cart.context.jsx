import { createContext, useState, useEffect } from "react";

const increaseCartItem = (cartItems, productToIncrease) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToIncrease.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToIncrease.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...productToIncrease, quantity: 1 }];
}

const decreaseCartItem = (cartItems, productToDecrease) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToDecrease.id);
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
    }

    return cartItems.map((cartItem) =>
            cartItem.id === productToDecrease.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    increaseItemToCart: () => { },
    decreaseItemFromCart: () => { },
    removeItemFromCart: () => { },
    cartCount:0,
    totalCartValue: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalCartValue, setTotalCartValue] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const totalCartValue = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setTotalCartValue(totalCartValue);
    }, [cartItems])

    const increaseItemToCart = (productToIncrease) => {
        setCartItems(increaseCartItem(cartItems, productToIncrease));
    }

    const decreaseItemFromCart = (productToDecrease) => {
        setCartItems(decreaseCartItem(cartItems, productToDecrease));
    }
    
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const value = { isCartOpen, setIsCartOpen, increaseItemToCart, decreaseItemFromCart, removeItemFromCart, cartItems, cartCount, totalCartValue };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};