import classes from './Counter.module.css';
import { decrement, increment, change } from '../store/reducers/counterSlice';
import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const amount = useRef()
  const symbol = useRef()
  const count = useSelector((state) => state.counter.inputValue)
  const dispatch = useDispatch();

  // ? Usecallback below saves the functions in the memory so they
  // ? don't have to be created everytime the component re-renders.

  const incrementHandler = useCallback(() => {
    dispatch(increment());
  }, []);
  const decrementHandler = useCallback(() => {
    dispatch(decrement());
  }, []);
  const changeHandler = useCallback(() => {
    dispatch(change({ value: Number(amount.current.value), symbol: symbol.current.value }))
  }, []);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {count} --</div>
      <button onClick={decrementHandler}>Counter --</button>
      <button onClick={incrementHandler}>Counter ++</button>
      <button onClick={changeHandler}>Increase by:</button>
      <br />
      <label htmlFor="amount">Amount</label>
      <input type="number" name="amount" ref={amount} defaultValue="0" />
      <label htmlFor="type">Type (+ or -)</label>
      <input type="text" name="type" ref={symbol} defaultValue="+" />
    </main>
  );
};

export default Counter;
