import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  //give it any name you want
  name: "counter",
  initialState, //also means initialState: initialState
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
  /* if you have a large code base, to combine all reducers:
  reducer: { counter: counterSlice.reducer }, */
});

export default store;
// make sure to default export the store, not the component function
