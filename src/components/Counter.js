import { useSelector, useDispatch } from "react-redux";
// step 6 - import useSelector hook from react-redux to component
// useSelector is a custom component hook from redux
// there's also a useStore but useSelector lets us select the part we want to use
// if using class-based component, also add 'connect'
import { counterActions } from "../store/index";
// import the variable counterActions - for Redux toolkit
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // step 8 - add dispatch

  // step 7 - add useSelector to manage the state change
  // redux will set up a subscription to redux store for this component
  // so component will be updated and will receive the latest counter
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  /* managing multiple states */

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function increaseHandler() {
    /* to increase by input of user, amount 5 is currently
    hardcoded but in the future to be changed */
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
    // payload is default in redux toolkit
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
