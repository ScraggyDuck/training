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

export const onLogin = (isLogin) => ({
  type: types.LOGIN,
  isLogin
});

