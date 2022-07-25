import { CATEGORIES_ACTION_TYPES } from "./category.type";

const INITIAL_CATEGOIES_STATE = {
  categoriesMap: {},
};

export const categoryReducer = (state = INITIAL_CATEGOIES_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
