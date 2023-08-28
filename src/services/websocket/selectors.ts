import { RootState } from "../store";
import { IOrderDetails } from "../order/orderSlice";

export const getWSUrl: (store: RootState) => string = 
  (store) => store.webSocket.wsUrl;

export const getOrders: (store: RootState) => Array<IOrderDetails> = 
  (store) => store.webSocket.orders;

export const getTotal: (store: RootState) => number =
  (store) => store.webSocket.total;

export const getTotalToday: (store: RootState) => number = 
  (store) => store.webSocket.totalToday;

export const getWSIsPending: (store: RootState) => boolean =
  (store) => store.webSocket.wsPending;

export const getWSIsConnected: (store: RootState) => boolean =
  (store) => store.webSocket.wsConnected;

