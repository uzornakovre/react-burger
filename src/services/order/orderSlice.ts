import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSendOrderData } from "../../utils/api";
import { UnknownAsyncThunkRejectedAction } from "@reduxjs/toolkit/dist/matchers";

interface IOrderState {
  id: number | null;
  ingredientsList: Array<string>;
  totalPrice: number;
  error: string;
  isLoading: boolean;
  currentOrder: IOrderDetails | null;
}

export interface IOrderDetails {
  readonly _id: string;
  readonly ingredients: Array<string>;
  readonly status: string;
  readonly name: string;
  readonly createdAt: string | Date;
  readonly updatedAt: string | Date;
  readonly number: number;
  ingredientsData?: Array<TIngredient>;
}

const initialState: IOrderState = {
  id: null,
  ingredientsList: [],
  totalPrice: 0,
  error: "",
  isLoading: false,
  currentOrder: null,
};

export const sendOrderData = createAsyncThunk(
  "order/setOrderData",
  async (
    orderData: { ingredientsList: Array<string> } & { token?: string }
  ) => {
    const res = await fetchSendOrderData(orderData);
    return res;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      return { ...state, totalPrice: action.payload };
    },
    setOrderId: (state, action: PayloadAction<number>) => {
      return { ...state, id: action.payload };
    },
    setCurrentOrder: (state, action: PayloadAction<IOrderDetails>) => {
      return { ...state, currentOrder: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        sendOrderData.fulfilled,
        (state, action: PayloadAction<TOrderResponse>) => {
          state.isLoading = false;
          state.id = action.payload.order.number;
        }
      )
      .addCase(
        sendOrderData.rejected,
        (state, action: UnknownAsyncThunkRejectedAction) => {
          state.isLoading = false;
          state.id = initialState.id;
          state.error = action.error.message || initialState.error;
        }
      );
  },
});

export const { setTotalPrice, setOrderId, setCurrentOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
