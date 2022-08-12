import { createStore } from "redux";
import { allReducers } from "./Reducers";

export let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
