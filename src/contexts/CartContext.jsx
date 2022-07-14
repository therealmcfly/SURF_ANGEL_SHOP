import { createContext, useState } from "react";

export const CartContext = createContext({
	cartFocus: null,
	setCartFocus: () => {},
})

export const CartProvider = ({ children }) => {
	const [ cartFocus, setCartFocus ] = useState(false);
	const value = {
		cartFocus, 
		setCartFocus,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}