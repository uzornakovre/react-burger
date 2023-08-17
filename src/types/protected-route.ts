import { ReactElement } from "react";

export type TProtectedRouteElementProps = {
  element: ReactElement;
  onlyUnAuth?: boolean;
  onlyAllowed?: boolean;
};