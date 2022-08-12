import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

export let allReducers = combineReducers({
  allProducts: productReducer,
  product: selectProductReducer,
});
