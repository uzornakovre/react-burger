import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { TWSActionTypes } from "./websocket/ws-actions";

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

      if (connectionStart().type === type) {
        url = payload;
        socket = new WebSocket(url);
        console.log("connect");
      }

      if (socket) {
        socket.onopen = (evt) => {
          dispatch(connectionSuccess(evt));
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
