import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext"

import "./CartIcon.scss";

const CartIcon = () => {

	const { cartFocus, setCartFocus } = useContext(CartContext);

	const toggleCartFocus = () => {
		setCartFocus(!cartFocus);
	}

	return (
		<div className="cart-icon-container" onClick={toggleCartFocus}>
			<ShoppingIcon className="shopping-icon" />
			{/* <span className="item-count">0</span> */}
		</div>
	)
}

export default CartIcon;