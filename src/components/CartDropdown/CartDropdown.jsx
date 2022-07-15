import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = (cartItemsList) => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{!cartItems.length ? <span className="empty-message">Cart is empty</span> : cartItems.map((item) => {
					return (
						<CartItem key={item.id} item={item}/>
					)
				})}
			</div>
			<Button>CHECKOUT</Button>
		</div>
	)
}

export default CartDropdown;