import { useEffect, useState } from "react";
import { createContext } from "react";
import { getCategoriesFromAndDocument } from "../utils/firebase/firebase";

// import SHOP_DATA from "../shop-data";
// import { addCollectionAndDoc } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // addCollectionAndDoc("categories", SHOP_DATA);

    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesFromAndDocument();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = {
    categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
