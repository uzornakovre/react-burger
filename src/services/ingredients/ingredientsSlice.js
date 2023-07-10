import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../utils/api';

const initialState = {
  ingredients: [],
  error: null,
  isLoading: false,
}

export const getIngredients = createAsyncThunk('ingredients/getIngredients', async () => {
  const res = await api.getIngredients().then(res => res.data).catch(err => err);
  return res;
})

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getIngredients.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.ingredients = [];
        state.error = action.error;
      })
  }
})

export default ingredientsSlice.reducer;