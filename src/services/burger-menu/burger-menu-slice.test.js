import reducer, { toggleBurgerMenu, initialState } from './burgerMenuSlice';

describe("burger-menu", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should set burger menu open", () => {
    expect(reducer(initialState, toggleBurgerMenu(true))).toEqual({
      ...initialState,
      isBurgerMenuOpen: true
    })
  })
});