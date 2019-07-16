import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import compare from "./compare";

const appReducers = combineReducers({
  products,
  cart,
  compare
});

export default appReducers;
