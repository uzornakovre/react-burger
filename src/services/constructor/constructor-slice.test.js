import { mockBun, mockIngredient1, mockIngredient2 } from "../../utils/mock-data";
import reducer, {
  initialState,
  addBun,
  addIngredient,
  moveIngredient,
  removeIngredient,
  clearSelected,
} from "./constructorSlice";

const stateWithMockIngredients = {
  bun: mockBun,
  ingredients: [mockIngredient1, mockIngredient2],
};

describe("constructor", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should add bun", () => {
    expect(reducer(initialState, addBun(mockBun))).toEqual({
      ...initialState,
      bun: mockBun,
    });
  });

  test("Should add ingredient", () => {
    expect(reducer(initialState, addIngredient(mockBun))).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients, mockBun],
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
      ingredients: [mockIngredient2, mockIngredient1],
    });
  });

  test("Should remove ingredient", () => {
    expect(reducer(stateWithMockIngredients, removeIngredient("3"))).toEqual({
      ...stateWithMockIngredients,
      ingredients: [mockIngredient1],
    });
  });

  test("Should clear selected ingredients", () => {
    expect(reducer(initialState, clearSelected())).toEqual(initialState);
  });
});
