import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrderDetails } from "../order/orderSlice";

interface IWSMessageState {
  orders: Array<IOrderDetails>;
  total: number;
  totalToday: number;
}

interface IWSState extends IWSMessageState {
  wsUrl: string;
  wsPending: boolean;
  wsConnected: boolean;
  wsRejected: boolean;
  wsError: string;
}

const initialState: IWSState = {
  wsUrl: "",
  wsPending: false,
  wsConnected: false,
  wsRejected: false,
  wsError: "",
  orders: [],
  total: 0,
  totalToday: 0,
};

const wsSlice = createSlice({
  name: "websocket",
  initialState,
  reducers: {
    connectionStart: (state, action: PayloadAction<string>) => {
      state.wsPending = true;
      state.wsUrl = action.payload;
    },
    connectionSuccess: (state) => {
      state.wsConnected = true;
      state.wsPending = false;
    },
    connectionClose: (state) => {
      state.wsConnected = false;
    },
    connectionError: (state, action: PayloadAction<Event>) => {
      state.wsRejected = true;
      state.wsConnected = false;
      // state.wsError = action.payload.message;
    },
    getMessage: (state, action: PayloadAction<IWSMessageState>) => {
      const { orders, total, totalToday } = action.payload;
      state.orders = orders;
      state.total = total;
      state.totalToday = totalToday;
    },
  },
});

export const wsActions = wsSlice.actions;

export type TWSActionTypes = typeof wsActions;

export default wsSlice.reducer;
