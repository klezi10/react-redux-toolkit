// step 1 - create store

import { legacy_createStore } from "redux";

export default function counterReducer(state = { counter: 0 }, action) {
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

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
