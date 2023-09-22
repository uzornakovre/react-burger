import { RootState } from "../store";

export const getIsOrderDetailsModalOpen: (store: RootState) => boolean = 
  (store) => store.modals.isOrderDetailsModalOpen;
export const getIsInfoModalOpen: (store: RootState) => boolean = 
  (store) => store.modals.isInfoModalOpen;
export const getInfoModalText: (store: RootState) => string = 
  (store) => store.modals.infoModalText;
export const getIsCartModalOpen: (store: RootState) => boolean = 
  (store) => store.modals.isCartModalOpen;
