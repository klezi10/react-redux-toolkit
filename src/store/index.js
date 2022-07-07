// step 1 - create store

import { legacy_createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
}

const store = legacy_createStore(counterReducer);

export default store;
// make sure to export the store, not the component function
