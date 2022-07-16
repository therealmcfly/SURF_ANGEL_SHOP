import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
	const {imageUrl, name, price, quantity } = item;

	const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

	const quantityUpHandler = () => {
		const resetQuantityItem = {...item, quantity:1}
		addItemToCart(resetQuantityItem);
	}
	const quantityDownHandler = () => {
		removeItemFromCart(item);
	}

	const removeHandler = () => {
		clearItemFromCart(item);
	}

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={quantityDownHandler}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={quantityUpHandler}>&#10095;</div>
			</span>
			<span className="price">${price*quantity}</span>
			<div className="remove-button" onClick={removeHandler} >&#10005;</div>
		</div>
	)
}

export default CheckoutItem;