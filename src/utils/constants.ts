import { RootState } from "../services/store";

// API

export const baseUrl: string = 'https://norma.nomoreparties.space/api';
export const headers = {
  "Content-Type": "application/json",
};

// Redux Store

export const getAllIngredients = (store: RootState) => store.allIngredients.ingredients;
export const getCurrentIngredient = (store: RootState) => store.currentIngredient;
export const getIngredientsIsLoading = (store: RootState) => store.allIngredients.isLoading;

export const getSelectedBun = (store: RootState) => store.selected.bun;
export const getSelectedIngredients = (store: RootState) => store.selected.ingredients;

export const getTotalPrice = (store: RootState) => store.order.totalPrice;
export const getOrderId = (store: RootState) => store.order.id;
export const getOrderIsLoading = (store: RootState) => store.order.isLoading;

export const getIsIngredientDetailsModalOpen = (store: RootState) => store.modals.isIngredientDetailsModalOpen;
export const getIsOrderDetailsModalOpen = (store: RootState) => store.modals.isOrderDetailsModalOpen
export const getIsInfoModalOpen = (store: RootState) => store.modals.isInfoModalOpen;
export const getInfoModalText = (store: RootState) => store.modals.infoModalText;

export const getUserInfo = (store: RootState) => store.auth.userInfo;
export const getIsLoggedIn = (store: RootState) => store.auth.isLoggedIn;
export const getAuthIsLoading = (store: RootState)=> store.auth.isLoading;
export const getIsAllowedPasswordReset = (store: RootState) => store.auth.allowPasswordReset;

export const getIsBurgerMenuOpen = (store: RootState) => store.burgerMenu.isBurgerMenuOpen;

