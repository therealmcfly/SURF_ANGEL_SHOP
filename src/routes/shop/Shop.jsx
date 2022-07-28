import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../store/category/category.action";
import { getCategoriesFromAndDocument } from "../../utils/firebase/firebase";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import Category from "../category/Category";

import "./Shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // addCollectionAndDoc("categories", SHOP_DATA);

    const getCategories = async () => {
      const categoriesArray = await getCategoriesFromAndDocument();
      dispatch(setCategories(categoriesArray));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
