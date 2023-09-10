import { mockIngredient } from "../../utils/mock-data";
import reducer, {
  initialState,
  setCurrentIngredient,
} from "./currentIngredientSlice";

describe("current-ingredient", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should set current ingredient", () => {
    expect(reducer(initialState, setCurrentIngredient(mockIngredient))).toEqual(mockIngredient)
  })
});