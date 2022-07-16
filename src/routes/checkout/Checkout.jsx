import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/CartContext";
import "./Checkout.scss";

const Checkout = () => {
	const { cartItems, cartTotalPrice } = useContext(CartContext);

	return (
			<div className="checkout-container">
				<div className="checkout-header">
					<div className="header-block">
						<span>Product</span>
					</div>
					<div className="header-block">
						<span>Description</span>
					</div>
					<div className="header-block">
						<span>Quantity</span>
					</div>
					<div className="header-block">
						<span>Price</span>
					</div>
					<div className="header-block">
						<span>Remove</span>
					</div>
				</div>

				{cartItems?.map((item) => {
					return (
						<CheckoutItem key={item.id} item={item}/>
						)
					})}
				<div className="total">Total : ${cartTotalPrice}</div>
			</div>
	)

}

export default Checkout;