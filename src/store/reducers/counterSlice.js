import { createSlice } from '@reduxjs/toolkit';

const initialState = { inputValue: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.inputValue++ },
    decrement: (state) => { state.inputValue-- },
    increase: (state, action) => {
      const { value, type } = action.payload
      // if (type === "+") {
      //   return  void(state.counter += value)
      // } else {
      //   console.log(state.counter)
      //   return void(state.counter -= value)
      // };
      // return (type === "+" ? state.counter.counter += value : state.counter.counter -= value)
      return (type === "+" ? void (state.inputValue += value) : void (state.inputValue -= value))
    }
  }
})

export const { increment, increase, decrement } = counterSlice.actions
export default counterSlice.reducer
