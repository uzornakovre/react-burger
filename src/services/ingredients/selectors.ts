import { RootState } from "../store";

export const getAllIngredients: (store: RootState) => Array<TIngredient> = 
  (store) => store.allIngredients.ingredients;
export const getIngredientsIsLoading: (store: RootState) => boolean = 
  (store) => store.allIngredients.isLoading;