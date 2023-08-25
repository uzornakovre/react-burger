// import { connectionStart, connectionSuccess } from "./wsSlice";
import { CaseReducerActions } from "@reduxjs/toolkit";
import { TWSState } from "./wsSlice";

// export type TWSActionTypes = {
//   connectionStart: () => {
//     type: 'websocket/connectionStart';
//     payload: string;
//   };
//   connectionSuccess: () => {
//     type: 'websocket/connectionSuccess';
//     payload?: string;
//   };
//   connectionClose: () => {
//     type: 'websocket/conenctionClose';
//   }
// };

export type TWSActionTypes = {
  connectionStart: any;
  connectionSuccess: any;
  connectionClose: any;
  getMessage: any;
};

// export type TWSActionTypes = CaseReducerActions<
//   {
//     connectionStart: (state: TWSState, action: { 
//       payload: 'string';
//       type: 'string';
//      }) => void;
//     connectionSuccess: (state: TWSState) => void;
//     connectionClose: (state: TWSState) => void;
//   },
//   "websocket"
// >;

// export const connectionStart = createAction('WS_CONNECTION_START');
// export const connectionSuccess = createAction<string, 'WS_CONNECTION_SUCCESS'>('WS_CONNECTION_SUCCESS');

// export const wsActions = {
//   connectionStart, connectionSuccess
// }
