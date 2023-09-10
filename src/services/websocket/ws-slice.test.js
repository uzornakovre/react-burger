import reducer, { initialState, wsActions } from "./wsSlice";
import { WS_URL } from "../../utils/constants";
import { mockOrders } from "../../utils/mock-data";

const {
  connectionStart,
  connectionSuccess,
  connectionClose,
  getMessage,
} = wsActions;

describe("websocket", () => {
  test("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Should start connection", () => {
    expect(reducer(initialState, connectionStart(WS_URL))).toEqual({
      ...initialState,
      wsPending: true,
      wsUrl: WS_URL
    })
  })

  test("Should connect", () => {
    expect(reducer(initialState, connectionSuccess())).toEqual({
      ...initialState,
      wsPending: false,
      wsConnected: true,
    })
  })

  test("Should get message", () => {
    expect(reducer(initialState, getMessage({ orders: mockOrders, total: 2, totalToday: 2}))).toEqual({
      ...initialState,
      orders: mockOrders,
      total: 2,
      totalToday: 2
    })
  })

  test("Should close connection", () => {
    expect(reducer(initialState, connectionClose())).toEqual({
      ...initialState,
      wsConnected: false,
      wsPending: false
    })
  })
});

