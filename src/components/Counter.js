import classes from './Counter.module.css';
import { decrement, increment, increase } from '../store/reducers/counterSlice';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const amount = useRef()
  const type = useRef()
  const count = useSelector((state) => state.counter.inputValue)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const increaseHandler = () => {
    dispatch(increase({ value: Number(amount.current.value), type: type.current.value }))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {count} --</div>
      <button onClick={decrementHandler}>Counter --</button>
      <button onClick={incrementHandler}>Counter ++</button>
      <button onClick={increaseHandler}>Increase by:</button>
      <br />
      <label htmlFor="amount">Amount</label>
      <input type="number" name="amount" ref={amount} defaultValue="0" />
      <label htmlFor="type">Type (+ / -)</label>
      <input type="text" name="type" ref={type} defaultValue="+" />
    </main>
  );
};

export default Counter;
