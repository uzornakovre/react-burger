import { RootState } from "../store";

export const getTotalPrice: (store: RootState) => number = 
  (store) => store.order.totalPrice;
export const getOrderId: (store: RootState) => number | null = 
  (store) => store.order.id;
export const getOrderIsLoading: (store: RootState) => boolean = 
  (store) => store.order.isLoading;