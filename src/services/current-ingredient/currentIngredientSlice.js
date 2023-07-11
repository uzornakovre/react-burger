import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState,
  reducers: {
    setCurrentIngredient: (state, action) => {
      return action.payload;
    }
  }
})

export const { setCurrentIngredient } = currentIngredientSlice.actions

export default currentIngredientSlice.reducer;