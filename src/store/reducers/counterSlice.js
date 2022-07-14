import { createSlice } from '@reduxjs/toolkit';

const initialState = { inputValue: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.inputValue++ },
    decrement: (state) => { state.inputValue-- },
    increase: (state, action) => {
      const {value, type} = action.payload
       type === "+" ? state.inputValue += value : state.inputValue -= value
      }
    }
  })

  export const { increment, increase, decrement } = counterSlice.actions
  export default counterSlice.reducer

  // ! BELOW LINE DIDN'T WORK
  // return type === "+" ? { state.counter += value } : { state.counter -= value}
  // * BELOW LINE WORKED
  // return (type === "+" ? void (state.inputValue += value) : void (state.inputValue -= value))
