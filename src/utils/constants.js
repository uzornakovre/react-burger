// API

export const baseUrl = 'https://norma.nomoreparties.space/api';

// Redux Store

export const getAllIngredients = store => store.allIngredients.ingredients;
export const getCurrentIngredient = store => store.currentIngredient;

export const getSelectedBun = store => store.selected.bun;
export const getSelectedIngredients = store => store.selected.ingredients;

export const getTotalPrice = store => store.order.totalPrice;
export const getOrderId = store => store.order.id;

export const getIsIngredientDetailsModalOpen = store => store.modals.isIngredientDetailsModalOpen;
export const getIsOrderDetailsModalOpen = store => store.modals.isOrderDetailsModalOpen
export const getIsErrorModalOpen = store => store.modals.isErrorModalOpen;