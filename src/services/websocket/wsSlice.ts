import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWSMessageState, IWSState } from "./types";

const initialState: IWSState = {
  wsUrl: "",
  wsPending: false,
  wsConnected: false,
  wsRejected: false,
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
      state.wsPending = false;
    },
    connectionError: (state, action: PayloadAction<Event>) => {
      state.wsRejected = true;
      state.wsConnected = false;
      state.wsError = action.payload;
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

export default wsSlice.reducer;
