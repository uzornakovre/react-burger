import { RootState } from "../store";

export const getCurrentIngredient: (store: RootState) => TIngredient = 
  (store) => store.currentIngredient;