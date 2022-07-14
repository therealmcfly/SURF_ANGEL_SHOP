import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../contexts/ProductContext";

import "./Shop.scss";


const Shop = () => {
	const {productList} = useContext(ProductContext);
	
	return (
		<div className="products-container">
			{productList.map((product) => 
				<ProductCard key={product.is} product={product}/>
			)}
		</div>
	)
};

export default Shop;