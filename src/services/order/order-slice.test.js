import { configureStore } from "@reduxjs/toolkit";
import { mockIngredientsList } from "../../utils/mock-data";
import reducer, {
  initialState,
  setOrderId,
  setTotalPrice,
  sendOrderData,
} from "./orderSlice";

describe("order", () => {
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

  test("Should set order id", () => {
    expect(reducer(initialState, setOrderId(123456))).toEqual({
      ...initialState,
      id: 123456,
    });
  });

  test("Should set total price", () => {
    expect(reducer(initialState, setTotalPrice("1000"))).toEqual({
      ...initialState,
      totalPrice: "1000",
    });
  });

  test("Should get order id", async () => {
    jest.spyOn(global, "fetch").mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => ({ order: { number: 2222 }, success: true }),
          ok: true,
        })
      )
    );

    await store.dispatch(
      sendOrderData({
        mockIngredientsList,
        accessToken: "token",
      })
    );

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ...initialState,
      id: 2222,
    });
  });

  test("Should fail to get order id", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(jest.fn(() => Promise.reject()));

    await store.dispatch(
      sendOrderData({
        mockIngredientsList,
        accessToken: "token",
      })
    );

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ...initialState,
      error: "Cannot read properties of undefined (reading 'message')",
    });
  });
});
