import { createContext, useReducer } from "react";
import createAction from "../utils/reducer/reducer";

export const CartContext = createContext({
  cartFocus: null,
  toggleCartFocus: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: null,
  cartTotalPrice: null,
});

const CART_ACTION_TYPES = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload.updatedCartItems,
        cartCount: payload.updatedCartCount,
        cartTotalPrice: payload.updatedCartTotalPrice,
      };
    case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        cartFocus: !state.cartFocus,
      };
    default:
      throw new Error(`The type ${type} is not valid in cartReducer`);
  }
};

const addCartItem = (cartItemListToAddTo, itemToAdd) => {
  const cartItem = cartItemListToAddTo?.find(
    (item) => item.id === itemToAdd.id
  );

  if (cartItem) {
    return cartItemListToAddTo.map((item) =>
      itemToAdd.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItemListToAddTo, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItemsListToRemoveFrom, itemToRemove) => {
  const cartItem = cartItemsListToRemoveFrom.find(
    (item) => item.id === itemToRemove.id
  );

  if (cartItem.quantity === 1) {
    return cartItemsListToRemoveFrom.filter(
      (item) => item.id !== itemToRemove.id
    );
  }

  return cartItemsListToRemoveFrom.map((item) =>
    itemToRemove.id === item.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItemsListToClearFrom, itemToClear) => {
  return cartItemsListToClearFrom.filter((item) => item.id !== itemToClear.id);
};

const INITIAL_CART_STATES = {
  cartItems: [],
  cartCount: 0,
  cartTotalPrice: 0,
  cartFocus: false,
};

export const CartProvider = ({ children }) => {
  const [{ cartFocus, cartItems, cartCount, cartTotalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_CART_STATES);

  const setCartItems = (updatedItems) => {
    const updatedCount = updatedItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const updatedTotalPrice = updatedItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        updatedCartItems: updatedItems,
        updatedCartCount: updatedCount,
        updatedCartTotalPrice: updatedTotalPrice,
      })
    );
  };

  const toggleCartFocus = () => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN, null));
  };

  const addItemToCart = (itemToAdd) => {
    const updatedCartItems = addCartItem(cartItems, itemToAdd);
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (itemToRemove) => {
    const updatedCartItems = removeCartItem(cartItems, itemToRemove);
    setCartItems(updatedCartItems);
  };

  const clearItemFromCart = (itemToClear) => {
    const updatedCartItems = clearCartItem(cartItems, itemToClear);
    setCartItems(updatedCartItems);
  };

  const value = {
    cartFocus,
    toggleCartFocus,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
