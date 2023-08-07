import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSendOrderData } from "../../utils/api";
import { UnknownAsyncThunkRejectedAction } from "@reduxjs/toolkit/dist/matchers";

interface IOrderState {
  id: number | null;
  ingredientsList: Array<TIngredient>;
  totalPrice: number;
  error: string;
  isLoading: boolean;
}

const initialState: IOrderState = {
  id: null,
  ingredientsList: [],
  totalPrice: 0,
  error: "",
  isLoading: false,
};

export const sendOrderData = createAsyncThunk(
  "order/setOrderData",
  async (ingredientsList: Array<TIngredient>) => {
    const res = await fetchSendOrderData(ingredientsList);
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

export const { setTotalPrice } = orderSlice.actions;

export default orderSlice.reducer;
