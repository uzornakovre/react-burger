import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { TWSActionTypes } from "./websocket/types";
import { refreshToken } from "../utils/api";
import { WS_URL } from "../utils/constants";
import { getCookie } from "../utils/cookies";

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
        connectionError,
        getMessage,
      } = wsActions;
      let url = undefined;

      if (connectionStart(payload).type === type) {
        url = payload;
        socket = new WebSocket(url);
      }

      if (socket) {
        if (connectionClose().type === type) {
          socket.close();
        }

        socket.onopen = () => {
          dispatch(connectionSuccess());
        };

        socket.onerror = (err) => {
          dispatch(connectionError(err));
        };

        socket.onclose = () => {
          dispatch(connectionClose());
        };

        socket.onmessage = (evt) => {
          const { data } = evt;
          const parsedData = JSON.parse(data);
          if (parsedData.success) {
            dispatch(getMessage(parsedData));
          } else {
            if (parsedData.message === "Invalid or missing token") {
              refreshToken().then(() => {
                dispatch(
                  connectionStart(`${WS_URL}?token=${getCookie("accessToken")}`)
                );
              });
            }
          }
        };
      }

      next(action);
    };
  };
};
