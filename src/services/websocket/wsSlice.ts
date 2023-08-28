import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOrderDetails } from "../order/orderSlice";

export interface TWSState {
  wsUrl: string;
  wsPending: boolean;
  wsConnected: boolean;
  wsRejected: boolean;
  wsError: string;
  orders: Array<IOrderDetails>;
  total: number;
  totalToday: number;
  currentOrder: {
    id: string | null;
    ingredients: Array<TIngredient>;
    name: string | null;
    status: string | null;
    price: 0,
    createdAt: string | Date | null;
  }
}

const initialState: TWSState = {
  wsUrl: '',
  wsPending: false,
  wsConnected: false,
  wsRejected: false,
  wsError: "",
  orders: [],
  total: 0,
  totalToday: 0,
  currentOrder: {
    id: null,
    ingredients: [],
    name: null,
    status: null,
    price: 0,
    createdAt: null
  }
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
    connectionError: (state, action: any) => {
      state.wsRejected = true;
      state.wsError = action.payload;
    },
    getMessage: (state, action: any) => {
      const { orders, total, totalToday } = action.payload;
      state.orders = orders;
      state.total = total;
      state.totalToday = totalToday;
    },
  },
});

export const wsActions = wsSlice.actions;

export default wsSlice.reducer;
