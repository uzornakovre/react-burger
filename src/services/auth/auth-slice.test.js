import { configureStore } from "@reduxjs/toolkit";
import reducer, {
  initialState,
  setLoggedIn,
  setUserInfo,
  allowPasswordReset,
  getUserInfo,
  updateUserInfo,
} from "./authSlice";

const user = {
  name: "Tommy",
  email: "tomvercetty@mail.vc",
};

describe("ingredients", () => {
  let store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
  });

  beforeEach(() => {
    store = configureStore({
      reducer: reducer,
      preloadedState: initialState,
    });
  });

  afterEach(() => {
    jest.spyOn(global, "fetch").mockClear();
  });

  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should log in", () => {
    expect(reducer(initialState, setLoggedIn(true))).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });

  test("Should set user info", () => {
    expect(reducer(initialState, setUserInfo(user))).toEqual({
      ...initialState,
      userInfo: user,
    });
  });

  test("Should allow password reset", () => {
    expect(reducer(initialState, allowPasswordReset(true))).toEqual({
      ...initialState,
      allowPasswordReset: true,
    });
  });

  test("Should get user info", async () => {
    jest.spyOn(global, "fetch").mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => ({
            user: user,
            success: true,
          }),
          ok: true,
        })
      )
    );

    await store.dispatch(getUserInfo({ accessToken: "token" }));

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ...initialState,
      userInfo: user,
      isLoading: false,
    });
  });

  test("Should fail to get user info", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(jest.fn(() => Promise.reject()));

    await store.dispatch(getUserInfo({ accessToken: "token" }));

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ...initialState,
      error: "Cannot read properties of undefined (reading 'message')",
      isLoading: false,
    });
  });

  test("Should update user info", async () => {
    jest.spyOn(global, "fetch").mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => ({
            user: user,
            success: true,
          }),
          ok: true,
        })
      )
    );

    await store.dispatch(updateUserInfo({ ...user, accessToken: "token" }));

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ...initialState,
      userInfo: user,
      isLoading: false,
    });
  });

  test("Should fail to update user info", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(jest.fn(() => Promise.reject()));

    await store.dispatch(
      updateUserInfo({ ...user, accessToken: "token" })
    );

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ...initialState,
      error: "Rejected",
      isLoading: false,
    });
  });
});
