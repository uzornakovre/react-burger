import { wsActions } from "./wsSlice";

export interface IWSMessageState {
  orders: Array<TOrderDetails>;
  total: number;
  totalToday: number;
}

export interface IWSState extends IWSMessageState {
  wsUrl: string;
  wsPending: boolean;
  wsConnected: boolean;
  wsRejected: boolean;
  wsError?: Event;
}

export type TWSActionTypes = typeof wsActions;