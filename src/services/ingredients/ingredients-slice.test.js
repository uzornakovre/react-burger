import { configureStore } from "@reduxjs/toolkit";
import reducer, { initialState, getIngredients } from "./ingredientsSlice";
import { mockIngredients } from "../../utils/mock-data";

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

  test("Should fulfill getIngredients", async () => {
    jest.spyOn(global, "fetch").mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => ({ data: mockIngredients, success: true }),
          ok: true,
        })
      )
    );

    await store.dispatch(getIngredients());

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ingredients: mockIngredients,
      isLoading: false,
      error: "",
    });
  });

  test("Should fail getIngredients", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(jest.fn(() => Promise.reject()));

    await store.dispatch(getIngredients());

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      error: "Rejected",
      ingredients: [],
      isLoading: false,
    });
  });
});