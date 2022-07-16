import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = (cartItemsList) => {
	const { cartItems, cartFocus, setCartFocus } = useContext(CartContext);
	const navigate = useNavigate();

	const handleClickCheckout = () => {
		navigate("/checkout")
		setCartFocus(!cartFocus);
	}

	return (
		<Fragment>
			<div className="cart-dropdown-container">
				<div className="cart-items">
					{!cartItems ? <span className="empty-message">Cart is empty</span> : cartItems.map((item) => {
						return (
							<CartItem key={item.id} item={item}/>
							)
						})}
				</div>
				<Button onClick={handleClickCheckout}>CHECKOUT</Button>
			</div>
		</Fragment>
	)
}

export default CartDropdown;