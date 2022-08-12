// import { products } from "../../products";
import { actionTypes } from "../Types/types";

let initState = [];

export let productReducer = (
  state = initState,
  { type, payload: products }
) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return products;
    default:
      return state;
  }
};

export let selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
