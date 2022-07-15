import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, failed: false }

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { email, password } = action.payload

      if (email === "amin@gmail.com" && password === "qqqqqq") {
        state.isLoggedIn = true
        state.failed = false
      } else {
        state.failed = true
      }
    },

    logOut: (state) => { state.isLoggedIn = false }
  }
})


export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer
