import { RootState } from "../store";

export const getIsBurgerMenuOpen: (store: RootState) => boolean = 
  (store) => store.burgerMenu.isBurgerMenuOpen;