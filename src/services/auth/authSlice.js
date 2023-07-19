import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      return { ...state, isLoggedIn: true}
    },

    setLoggedOut: (state) => {
      return { ...state, isLoggedIn: false}
    }
  }
})

export const { setLoggedIn, setLoggedOut } = authSlice.actions

export default authSlice.reducer;