import { configureStore } from "@reduxjs/toolkit";
import reducer, { initialState, getIngredients } from "./ingredientsSlice";

const ingredients = [
  {
    _id: "60d3b41abdacab0026a733c6",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
  {
    _id: "60d3b41abdacab0026a733c7",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
  }
];

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
          json: () => ({ data: ingredients, success: true }),
          ok: true,
        })
      )
    );

    await store.dispatch(getIngredients());

    expect(fetch).toBeCalledTimes(1);

    expect(store.getState()).toEqual({
      ingredients: ingredients,
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