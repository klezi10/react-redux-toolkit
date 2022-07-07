import { useSelector, useDispatch } from "react-redux";
// step 6 - import useSelector hook from react-redux to component
// useSelector is a custom component hook from redux
// there's also a useStore but useSelector lets us select the part we want to use
// if using class-based component, also add 'connect'
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // step 8 - add dispatch

  // step 7 - add useSelector to manage the state change
  // redux will set up a subscription to redux store for this component
  // so component will be updated and will receive the latest counter
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  function incrementHandler() {
    dispatch({ type: "increment" });
  }

  function decrementHandler() {
    dispatch({ type: "decrement" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
