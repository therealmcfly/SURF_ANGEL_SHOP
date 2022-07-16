import { createContext, useState } from "react";

export const CartContext = createContext({
	cartFocus: null,
	setCartFocus: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: null,
	setCartCount: () => [],
})

const addCartItem = (cartItems, itemToAdd) => {

	let updatedCartItems;
	const cartItem = cartItems.find((item) => item.id === itemToAdd.id);
	
	if (cartItem) {
		updatedCartItems = cartItems.map((item) => 
		itemToAdd.id === item.id ?
			{...item, quantity: item.quantity + itemToAdd.quantity}
			: item
		)
		return updatedCartItems;
	} 
	updatedCartItems = [ ...cartItems, itemToAdd]
	return updatedCartItems;
}

export const CartProvider = ({ children }) => {
	const [ cartFocus, setCartFocus ] = useState(false);
	const [ cartItems, setCartItems ] = useState([]);
	const [ cartCount, setCartCount ] = useState(0);

	const addItemToCart = (itemToAdd) => {
		setCartItems(addCartItem(cartItems, itemToAdd));
	}

	const value = {
		cartFocus, 
		setCartFocus,
		cartItems,
		addItemToCart,
		cartCount,
		setCartCount,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}