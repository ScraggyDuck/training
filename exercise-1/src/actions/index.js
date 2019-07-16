import * as types from "../constants/actionTypes";

export const addToCart = product => ({
  type: types.ADD_TO_CART,
  product
});

export const deleteProductInCart = product => ({
  type: types.DELETE_PRODUCT_IN_CART,
  product
});

export const updateProductInCart = (product, quantity) => ({
  type: types.UPDATE_PRODUCT_IN_CART,
  product,
  quantity
});

export const addToCompare = product => ({
  type: types.ADD_TO_COMPARE,
  product
});

export const removeFromCompare = id => ({
  type: types.REMOVE_FROM_COMPARE,
  id
});