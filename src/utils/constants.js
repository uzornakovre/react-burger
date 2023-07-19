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

// SVG Pathes 

export const burgerIconPath = <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0571 8.7H1.96905C1.44524 8.7 
  1.02619 8.25842 1 7.70645C1 3.26308 4.69286 1 12 1C19.3071 1 23 3.26308 23 7.70645C23 
  8.25842 22.581 8.7 22.0571 8.7ZM24 12.55C24 11.6362 23.2674 10.9 22.3579 
  10.9H1.64211C0.732632 10.9 0 11.6362 0 12.55C0 13.4638 0.732632 14.2 1.64211 
  14.2H22.3579C23.2674 14.2 24 13.4638 24 12.55ZM22.0321 16.4H1.94174C1.41855 16.4 1 
  16.8693 1 17.456V18.5707C1 21.0053 2.77883 23 4.95006 23H19.0499C21.2212 23 23 21.0053 
  23 18.5707V17.456C22.9738 16.8693 22.5553 16.4 22.0321 16.4Z" fill="inherit"/>

export const historyListIconPath = <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.89543 1.89543 1 3 1H21C22.1046
  1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V3ZM6.5 
  8C7.0523 8 7.5 7.5523 7.5 7C7.5 6.4477 7.0523 6 6.5 6C5.9477 6 5.5 6.4477 5.5 7C5.5 
  7.5523 5.9477 8 6.5 8ZM8.5 7C8.5 6.44772 8.94772 6 9.5 6H17.5C18.0523 6 18.5 6.44772 
  18.5 7C18.5 7.55228 18.0523 8 17.5 8H9.5C8.94772 8 8.5 7.55228 8.5 7ZM9.5 11C8.94772 
  11 8.5 11.4477 8.5 12C8.5 12.5523 8.94772 13 9.5 13H17.5C18.0523 13 18.5 12.5523 18.5 
  12C18.5 11.4477 18.0523 11 17.5 11H9.5ZM9.5 16C8.94772 16 8.5 16.4477 8.5 17C8.5 17.5523 
  8.94772 18 9.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17C18.5 16.4477 18.0523 16 17.5 
  16H9.5ZM6.5 13C7.0523 13 7.5 12.5523 7.5 12C7.5 11.4477 7.0523 11 6.5 11C5.9477 11 5.5 
  11.4477 5.5 12C5.5 12.5523 5.9477 13 6.5 13ZM6.5 18C7.0523 18 7.5 17.5523 7.5 17C7.5 
  16.4477 7.0523 16 6.5 16C5.9477 16 5.5 16.4477 5.5 17C5.5 17.5523 5.9477 18 6.5 18Z" 
  fill="inherit"/>

export const profileIconPath =  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.068 
  6.56875C17.068 10.0837 14.8959 13.1 12 13.1C9.10401 13.1 6.93203 10.0837 6.93203 6.56875C6.93203 
  3.05385 8.80118 1 12 1C15.1988 1 17.068 3.05385 17.068 6.56875ZM3.10524 20.9572C3.53926 21.4607 5.40556 
  23 12 23C18.5944 23 20.4608 21.4607 20.8947 20.9572C20.9792 20.8593 21.0103 20.7362 20.9971 
  20.6088C20.8969 19.638 20.0015 15.3 12 15.3C3.99848 15.3 3.10311 19.638 3.00291 20.6088C2.98975 
  20.7362 3.02077 20.8593 3.10524 20.9572Z" fill="inherit"/>