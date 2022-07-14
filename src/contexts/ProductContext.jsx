import { useState } from "react";
import { createContext } from "react";

import PRODUCT_LIST from "../assets/shop-data.json"

export const ProductContext = createContext({
  productList: null,
  setProductList: () => null,
});


export const ProductsProvider = ({ children }) => {
	const [productList, setProductList] = useState(PRODUCT_LIST);
  const value = {
		productList,
    setProductList,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
