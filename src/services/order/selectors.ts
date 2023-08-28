import { RootState } from "../store";
import { IOrderDetails } from "./orderSlice";

export const getTotalPrice: (store: RootState) => number = 
  (store) => store.order.totalPrice;
export const getOrderId: (store: RootState) => number | null = 
  (store) => store.order.id;
export const getOrderIsLoading: (store: RootState) => boolean = 
  (store) => store.order.isLoading;
export const getCurrentOrder: (store: RootState) => IOrderDetails | null =
  (store) => store.order.currentOrder;