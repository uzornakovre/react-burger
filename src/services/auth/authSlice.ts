import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserInfo, fetchUpdateUserInfo } from "../../utils/api";
import { UnknownAsyncThunkRejectedAction } from "@reduxjs/toolkit/dist/matchers";

interface IAuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
  allowPasswordReset: boolean;
  userInfo: TUserInfo;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  isLoading: false,
  error: '',
  allowPasswordReset: false,
  userInfo: { email: "", name: "" },
};

export const getUserInfo = createAsyncThunk(
  "auth/userInfo",
  async (token: string) => {
    const res = await fetchUserInfo(token);
    return res;
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (data: TUserInfo & { token?: string }) => {
    const res = await fetchUpdateUserInfo(data);
    return res;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoggedIn: action.payload };
    },
    setUserInfo: (state, action: PayloadAction<TUserInfo>) => {
      return { ...state, userInfo: action.payload };
    },
    allowPasswordReset: (state, action: PayloadAction<boolean>) => {
      return { ...state, allowPasswordReset: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getUserInfo.fulfilled,
        (state, action: PayloadAction<TUserInfo>) => {
          state.isLoading = false;
          state.userInfo = action.payload || initialState.userInfo;
        }
      )
      .addCase(getUserInfo.rejected, (state, action: UnknownAsyncThunkRejectedAction) => {
        state.isLoading = false;
        state.userInfo = initialState.userInfo;
        state.error = action.error.message || initialState.error;
      })

      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateUserInfo.fulfilled,
        (state, action: PayloadAction<TUserInfo>) => {
          state.isLoading = false;
          state.userInfo = action.payload || initialState.userInfo;
        }
      )
      .addCase(updateUserInfo.rejected, (state, action: UnknownAsyncThunkRejectedAction) => {
        state.isLoading = false;
        state.userInfo = initialState.userInfo;
        state.error = action.error.message || initialState.error;
      });
  },
});

export const { setLoggedIn, setUserInfo, allowPasswordReset } =
  authSlice.actions;

export default authSlice.reducer;
