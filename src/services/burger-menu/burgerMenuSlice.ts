import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBurgerMenuState {
  isBurgerMenuOpen: boolean;
}

export const initialState: IBurgerMenuState = {
  isBurgerMenuOpen: false,
};

const burgerMenuSlice = createSlice({
  name: "burger-menu",
  initialState,
  reducers: {
    toggleBurgerMenu: (state, action: PayloadAction<boolean>) => {
      return { ...state, isBurgerMenuOpen: action.payload };
    },
  },
});

export const { toggleBurgerMenu } = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;
