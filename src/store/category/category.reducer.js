import { CATEGORIES_ACTION_TYPES } from "./category.types";

const INITIAL_CATEGORIES_STATE = {
  categories: [],
};

export const categoryReducer = (state = INITIAL_CATEGORIES_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
