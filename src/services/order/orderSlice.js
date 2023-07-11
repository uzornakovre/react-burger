import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../utils/api';

const initialState = {
  id: null,
  ingredientsList: [],
  totalPrice: 0,
  error: null,
  isLoading: false,
}

export const sendOrderData = createAsyncThunk('order/setOrderData', async (ingredientsList) => {
  const res = await api.sendOrderData(ingredientsList).then(res => res).catch(err => err);
  return res;
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      return { ...state, totalPrice: action.payload }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(sendOrderData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendOrderData.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.order) {
          state.id = action.payload.order.number;
        } else {
          state.error = action.payload;
        } 
      })
      .addCase(sendOrderData.rejected, (state, action) => {
        state.isLoading = false;
        state.id = null;
        state.error = action.payload;
      })
  }
})

export const { setTotalPrice } = orderSlice.actions

export default orderSlice.reducer;