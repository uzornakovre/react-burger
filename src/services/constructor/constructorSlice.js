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

    moveIngredient: (state, action) => {
      const ingredients = [...state.ingredients];
      ingredients.splice(action.payload.hoverIndex, 0, ingredients.splice(action.payload.dragIndex, 1)[0]);
      return { ...state, ingredients }
    },

    removeIngredient: (state, action) => {
      return { ...state, ingredients: state.ingredients.filter(item => item.id !== action.payload) }
    },

    clearSelected: (state) => {
      return { ...state, bun: {}, ingredients: [] }
    }
  }
})

export const { addBun, addIngredient, moveIngredient, removeIngredient, clearSelected } = constructorSlice.actions

export default constructorSlice.reducer;