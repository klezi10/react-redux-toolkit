// step 1 - create store

import { legacy_createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
}

const store = legacy_createStore(counterReducer);

export default store;
// make sure to export the store, not the component function