import createAction from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (newCategories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, newCategories);
