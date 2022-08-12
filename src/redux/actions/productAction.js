import { actionTypes } from "../Types/types";

let set_products = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

let selected_product = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export { set_products, selected_product };
