import reducer, {
  initialState,
  addBun,
  addIngredient,
  moveIngredient,
  removeIngredient,
  clearSelected,
} from "./constructorSlice";

const bun = {
  _id: "60d3b41abdacab0026a733c6",
  id: "1",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
};

const ingredient1 = {
  _id: "60d3b41abdacab0026a733c9",
  id: "2",
  name: "Мясо бессмертных моллюсков Protostomia",
  type: "main",
  proteins: 433,
  fat: 244,
  carbohydrates: 33,
  calories: 420,
  price: 1337,
  image: "https://code.s3.yandex.net/react/code/meat-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
  __v: 0,
};

const ingredient2 = {
  _id: "60d3b41abdacab0026a733c9",
  id: "3",
  name: "Мясо бессмертных моллюсков Protostomia",
  type: "main",
  proteins: 433,
  fat: 244,
  carbohydrates: 33,
  calories: 420,
  price: 1337,
  image: "https://code.s3.yandex.net/react/code/meat-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
  __v: 0,
};

const stateWithMockIngredients = {
  bun,
  ingredients: [ingredient1, ingredient2],
};

describe("constructor", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should add bun", () => {
    expect(reducer(initialState, addBun(bun))).toEqual({
      ...initialState,
      bun: bun,
    });
  });

  test("Should add ingredient", () => {
    expect(reducer(initialState, addIngredient(bun))).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients, bun],
    });
  });

  test("Should move ingredient from 0 to 1 index", () => {
    expect(
      reducer(
        stateWithMockIngredients,
        moveIngredient({ hoverIndex: 0, dragIndex: 1 })
      )
    ).toEqual({
      ...stateWithMockIngredients,
      ingredients: [ingredient2, ingredient1],
    });
  });

  test("Should remove ingredient", () => {
    expect(reducer(stateWithMockIngredients, removeIngredient("3"))).toEqual({
      ...stateWithMockIngredients,
      ingredients: [ingredient1],
    });
  });

  test("Should clear selected ingredients", () => {
    expect(reducer(initialState, clearSelected())).toEqual(initialState);
  });
});
