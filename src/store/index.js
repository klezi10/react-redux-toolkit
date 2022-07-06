// step 1 - create store

import redux from "redux";

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

const store = redux.legacy_createStore(counterReducer);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
