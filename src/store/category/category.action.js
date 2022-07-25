import createAction from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const setCategoriesMap = (newCategories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, newCategories);
