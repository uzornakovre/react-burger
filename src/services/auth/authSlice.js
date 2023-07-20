import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../../utils/auth';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  userInfo: {}
}

export const getUserInfo = createAsyncThunk('auth/userInfo', async (accessToken) => {
  const res = await auth.getUserInfo(accessToken).then(res => res.user).catch(err => err);
  return res;
});

export const updateUserInfo = createAsyncThunk('auth/updateUserInfo', 
  async (data) => {
  const res = await auth.updateUserInfo(data)
    .then(res => res.user)
    .catch(err => err);
  return res;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      return { ...state, isLoggedIn: action.payload}
    },
    setUserInfo: (state, action) => {
      return { ...state, userInfo: action.payload }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload || {};
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.userInfo = {};
        state.error = action.error;
      })

      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload || {};
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.userInfo = {};
        state.error = action.error;
      })
  }
})

export const { setLoggedIn, setLoggedOut, setUserInfo } = authSlice.actions

export default authSlice.reducer;