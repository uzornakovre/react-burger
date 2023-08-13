import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchIngredients } from "../../utils/api";
import { UnknownAsyncThunkRejectedAction } from "@reduxjs/toolkit/dist/matchers";

interface IIngredientsState {
  ingredients: Array<TIngredient>;
  error: string;
  isLoading: boolean;
}

const initialState: IIngredientsState = {
  ingredients: [],
  error: "",
  isLoading: false,
};

export const getIngredients = createAsyncThunk(
  "ingredients/getIngredients",
  async () => {
    const res = await fetchIngredients();
    return res;
  }
);

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getIngredients.fulfilled,
        (state, action: PayloadAction<Array<TIngredient>>) => {
          state.isLoading = false;
          state.ingredients = action.payload;
        }
      )
      .addCase(
        getIngredients.rejected,
        (state, action: UnknownAsyncThunkRejectedAction) => {
          state.isLoading = false;
          state.ingredients = initialState.ingredients;
          state.error = action.error.message || initialState.error;
        }
      );
  },
});

export default ingredientsSlice.reducer;
