import reducer, { initialState, wsActions } from "./wsSlice";
import { WS_URL } from "../../utils/constants";

const {
  connectionStart,
  connectionSuccess,
  connectionClose,
  getMessage,
} = wsActions;

const orders = [
  {
    "_id": "64f8aa3e6d2997001caa699c",
    "ingredients": [
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa093d"
    ],
    "status": "done",
    "name": "Space флюоресцентный бургер",
    "createdAt": "2023-09-06T16:35:10.596Z",
    "updatedAt": "2023-09-06T16:35:10.789Z",
    "number": 19496
},
{
  "_id": "64f8aa3e6d2997001caa699c",
  "ingredients": [
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa093d"
  ],
  "status": "done",
  "name": "Space флюоресцентный бургер",
  "createdAt": "2023-09-06T16:35:10.596Z",
  "updatedAt": "2023-09-06T16:35:10.789Z",
  "number": 19496
}
];

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
    expect(reducer(initialState, getMessage({ orders, total: 2, totalToday: 2}))).toEqual({
      ...initialState,
      orders: orders,
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

