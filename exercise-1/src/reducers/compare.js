import * as types from "../constants/actionTypes";
import { findIndex } from "lodash";

var initialState = [];

const compare = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_COMPARE:
      let newCompareAdd = [...state];
      newCompareAdd.push(action.product);
      return newCompareAdd;
    case types.REMOVE_FROM_COMPARE:
      const index = findIndex(state, product => product.id === action.id);
      let newCompareRemove = [...state];
      newCompareRemove.splice(index, 1);
      return newCompareRemove;
    default:
      return state;
  }
};

export default compare;
