import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bun: {},
  ingredients: [],
}

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    addBun: (state, action) => {
      return { ...state, bun: action.payload }
    },

    addIngredient: (state, action) => {
      if (state.ingredients?.length) {
        return { ...state, ingredients: [...state.ingredients, action.payload] };
      } else {
        return { ...state, ingredients: [action.payload] };
      }
    },

    removeIngredient: (state, action) => {
      return { ...state, ingredients: state.ingredients.filter(item => item.id !== action.payload) }
    }
  }
})

export const { addBun, addIngredient, removeIngredient } = constructorSlice.actions

export default constructorSlice.reducer;