import { createSlice } from '@reduxjs/toolkit';

const initialState = { inputValue: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.inputValue++ },
    decrement: (state) => { state.inputValue-- },
    change: (state, action) => {
      const { value, symbol } = action.payload
      // ! CLASSICAL IF/ELSE WAY TO RETURN A NEW STATE
      // if (symbol === "+") {
      //   state.inputValue += value
      // } else if (symbol === "-") {
      //   state.inputValue -= value
      // }
      // ! TERNARY OPERATOR WAY TO RETURN A NEW STATE
      symbol === "+" ? state.inputValue += value : state.inputValue -= value
    }
  }
})

export const { decrement, change, increment, } = counterSlice.actions
export default counterSlice.reducer


// ! BELOW LINE DIDN'T WORK
// return type === "+" ? { state.inputValue += value } : { state.inputValue -= value}

// ? BELOW LINES WORKED BUT BAD PRACTICE
// return (type === "+" ? void (state.inputValue += value) : void (state.inputValue -= value))

// * BELOW LINE IS GOOD PRACTICE ONLY IF WORKING WITHOUT THE EMMET PACKAGE (CLASSIC REDUX)
// return type === "+" ? { ...state, inputValue: state.inputValue + value } : { inputValue: state.inputValue - value }
