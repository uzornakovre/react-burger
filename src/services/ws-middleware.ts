import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { TWSActionTypes } from "./websocket/wsSlice";

export const wsMiddleware = (wsActions: TWSActionTypes): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        connectionStart,
        connectionSuccess,
        connectionClose,
        getMessage,
      } = wsActions;
      let url = undefined;

      if (connectionStart(payload).type === type) {
        url = payload;
        socket = new WebSocket(url);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(connectionSuccess());
        };

        socket.onerror = (err) => {
          console.log(err);
        };

        socket.onmessage = (evt) => {
          const { data } = evt;
          dispatch(getMessage(JSON.parse(data)));
        };

        socket.onclose = () => {
          dispatch(connectionClose());
        };
      }

      next(action);
    };
  };
};
