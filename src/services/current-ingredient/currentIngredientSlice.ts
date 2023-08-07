import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TIngredient = {
  _id: '',
  name: '',
  type: '',
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: '',
}

const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState,
  reducers: {
    setCurrentIngredient: (state, action: PayloadAction<TIngredient>) => {
      return action.payload;
    }
  }
})

export const { setCurrentIngredient } = currentIngredientSlice.actions

export default currentIngredientSlice.reducer;