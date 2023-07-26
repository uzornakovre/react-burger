import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBurgerMenuOpen: false
}

const burgerMenuSlice = createSlice({
  name: 'burger-menu',
  initialState,
  reducers: {
    toggleBurgerMenu: (state, action) => {
      return { ...state, isBurgerMenuOpen: action.payload }
    }
  }
});

export const { toggleBurgerMenu} = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;