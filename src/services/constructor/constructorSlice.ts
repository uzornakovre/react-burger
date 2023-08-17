import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IConstructorState {
  bun: TIngredient;
  ingredients: Array<TIngredient>;
}

const initialState: IConstructorState = {
  bun: {
    _id: '',
    name: '',
    type: '',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: '',
  },
  ingredients: [],
}

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    addBun: (state, action: PayloadAction<TIngredient>) => {
      return { ...state, bun: action.payload }
    },

    addIngredient: (state, action: PayloadAction<TIngredient>) => {
      if (state.ingredients?.length) {
        return { ...state, ingredients: [...state.ingredients, action.payload] };
      } else {
        return { ...state, ingredients: [action.payload] };
      }
    },

    moveIngredient: (state, action: PayloadAction<TMoveIndex>) => {
      const ingredients: Array<TIngredient> = [...state.ingredients];
      ingredients.splice(action.payload.hoverIndex, 0, ingredients.splice(action.payload.dragIndex, 1)[0]);
      return { ...state, ingredients }
    },

    removeIngredient: (state, action: PayloadAction<string>) => {
      return { ...state, ingredients: state.ingredients.filter(item => item.id !== action.payload) }
    },

    clearSelected: (state) => {
      return { ...state, bun: initialState.bun, ingredients: initialState.ingredients }
    }
  }
})

export const { addBun, addIngredient, moveIngredient, removeIngredient, clearSelected } = constructorSlice.actions

export default constructorSlice.reducer;