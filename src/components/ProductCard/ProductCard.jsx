import "./ProductCard.scss"
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({product}) => {
	const { imageUrl, name, price } = product;

	const { addItemToCart } = useContext(CartContext);

	const handleAddToCart = () => {
		return addItemToCart(product)};

	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`}/>
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{`$${price}`}</span>
			</div>
			<Button buttonType='inverted' onClick={handleAddToCart}>Add to Cart</Button>
		</div>
	)
	}
	
export default ProductCard;