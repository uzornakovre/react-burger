import { RootState } from "../services/store";

// API

export const baseUrl: string = "https://norma.nomoreparties.space/api";
export const headers: IRequestHeaders = {
  "Content-Type": "application/json",
};

// Redux Store

export const getAllIngredients: (store: RootState) => Array<TIngredient> = 
  (store) => store.allIngredients.ingredients;
export const getCurrentIngredient: (store: RootState) => TIngredient = 
  (store) => store.currentIngredient;
export const getIngredientsIsLoading: (store: RootState) => boolean = 
  (store) => store.allIngredients.isLoading;

export const getSelectedBun: (store: RootState) => TIngredient = 
  (store) => store.selected.bun;
export const getSelectedIngredients: (store: RootState) => Array<TIngredient> = 
  (store) => store.selected.ingredients;

export const getTotalPrice: (store: RootState) => number = 
  (store) => store.order.totalPrice;
export const getOrderId: (store: RootState) => number | null = 
  (store) => store.order.id;
export const getOrderIsLoading: (store: RootState) => boolean = 
  (store) => store.order.isLoading;

export const getIsIngredientDetailsModalOpen: (store: RootState) => boolean = 
  (store) => store.modals.isIngredientDetailsModalOpen;
export const getIsOrderDetailsModalOpen: (store: RootState) => boolean = 
  (store) => store.modals.isOrderDetailsModalOpen;
export const getIsInfoModalOpen: (store: RootState) => boolean = 
  (store) => store.modals.isInfoModalOpen;
export const getInfoModalText: (store: RootState) => string = 
  (store) =>store.modals.infoModalText;

export const getUserInfo: (store: RootState) => TUserInfo = 
  (store) => store.auth.userInfo;
export const getIsLoggedIn: (store: RootState) => boolean = 
  (store) => store.auth.isLoggedIn;
export const getAuthIsLoading: (store: RootState) => boolean = 
  (store) => store.auth.isLoading;
export const getIsAllowedPasswordReset: (store: RootState) => boolean = 
  (store) => store.auth.allowPasswordReset;

export const getIsBurgerMenuOpen: (store: RootState) => boolean = 
  (store) => store.burgerMenu.isBurgerMenuOpen;

// Проверка на HTML элемент

export const isHtmlElement = (elem: any): elem is HTMLElement =>
  elem instanceof HTMLElement;
