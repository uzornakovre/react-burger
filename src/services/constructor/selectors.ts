import { RootState } from "../store";

export const getSelectedBun: (store: RootState) => TIngredient = 
  (store) => store.selected.bun;
export const getSelectedIngredients: (store: RootState) => Array<TIngredient> = 
  (store) => store.selected.ingredients;