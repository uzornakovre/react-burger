import reducer, {
  initialState,
  setCurrentIngredient,
} from "./currentIngredientSlice";

const ingredient = {
  _id: "60d3b41abdacab0026a733c9",
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

describe("current-ingredient", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should set current ingredient", () => {
    expect(reducer(initialState, setCurrentIngredient(ingredient))).toEqual(ingredient)
  })
});