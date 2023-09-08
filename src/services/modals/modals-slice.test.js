import reducer, {
  initialState,
  setIsOrderDetailsModalOpen,
  setIsInfoModalOpen,
  setInfoModalText,
  closeAllModals,
} from "./modalsSlice";

describe("modals", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should set order details modal open", () => {
    expect(reducer(initialState, setIsOrderDetailsModalOpen(true))).toEqual({
      ...initialState,
      isOrderDetailsModalOpen: true
    })
  })

  test("Should set info modal open", () => {
    expect(reducer(initialState, setIsInfoModalOpen(true))).toEqual({
      ...initialState,
      isInfoModalOpen: true
    })
  })

  test("Should set info modal text", () => {
    expect(reducer(initialState, setInfoModalText('test text'))).toEqual({
      ...initialState,
      infoModalText: 'test text'
    })
  })

  test("Should close all modals", () => {
    expect(reducer(initialState, closeAllModals())).toEqual(initialState);
  })
});
