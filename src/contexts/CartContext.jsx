import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
	cartFocus: null,
	setCartFocus: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: null,
	cartTotalPrice: null,
})

const addCartItem = (cartItemListToAddTo, itemToAdd) => {
	const cartItem = cartItemListToAddTo?.find((item) => item.id === itemToAdd.id);

	if (cartItem) { 
		return cartItemListToAddTo.map((item) => 
		itemToAdd.id === item.id ?
			{...item, quantity: item.quantity + 1 }
			: item
		)
	} 
	return [...cartItemListToAddTo, {...itemToAdd, quantity: 1 }];
}

const removeCartItem = (cartItemsListToRemoveFrom, itemToRemove) => {

	const cartItem = cartItemsListToRemoveFrom.find(
		(item) => item.id === itemToRemove.id
	);

	if (cartItem.quantity === 1 ) {
		return cartItemsListToRemoveFrom.filter((item) => item.id !== itemToRemove.id);
	}
	
	return cartItemsListToRemoveFrom.map((item) => 
	 itemToRemove.id === item.id ?
			{ ...item, quantity: item.quantity - 1 }
			: item
	)
	} 

	const clearCartItem = (cartItemsListToClearFrom, itemToClear) => {
		return cartItemsListToClearFrom.filter((item) => item.id !== itemToClear.id);
	}

export const CartProvider = ({ children }) => {
	const [ cartFocus, setCartFocus ] = useState(false);
	const [ cartItems, setCartItems ] = useState([]);
	const [ cartCount, setCartCount ] = useState(0);
	const [ cartTotalPrice, setCartTotalPrice ] = useState(0);

	useEffect(() => {
		const count = cartItems.reduce(
			(total, item) => total + item.quantity, 0)
		setCartCount(count);
	}, [cartItems])

	useEffect(() => {
		const total = cartItems.reduce(
			(total, item) => total + item.quantity * item.price, 0)
		setCartTotalPrice(total);
	}, [cartItems])

	const addItemToCart = (itemToAdd) => {
		setCartItems(addCartItem(cartItems, itemToAdd));
	}

	const removeItemFromCart = (itemToRemove) => {
		setCartItems(removeCartItem(cartItems, itemToRemove));
	}

	const clearItemFromCart = (itemToClear) => {
		setCartItems(clearCartItem(cartItems, itemToClear))
	}

	const value = {
		cartFocus, 
		setCartFocus,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cartCount,
		cartTotalPrice,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}