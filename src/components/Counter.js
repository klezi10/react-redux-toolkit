import { useSelector } from 'react-redux/es/exports';
// step 6 - import useSelector hook from react-redux to component
// useSelector is a custom component hook from redux
// there's also a useStore but useSelector lets us select the part we want to use
// if using class-based component, also add 'connect'
import classes from './Counter.module.css';



const Counter = () => {
  // step 7 - add useSelector to manage the state change
  // redux will set up a subscription to redux store for this component
  // so component will be updated and will receive the latest counter
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
