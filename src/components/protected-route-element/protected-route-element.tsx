import { useAppSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import {
  getIsLoggedIn,
  getIsAllowedPasswordReset,
} from "../../utils/constants";
import { FC } from "react";
import { TProtectedRouteElementProps } from "../../types/protected-route";

const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({
  element,
  onlyUnAuth,
  onlyAllowed,
}) => {
  const location = useLocation();
  const loggedIn = useAppSelector(getIsLoggedIn);
  const allowPasswordReset = useAppSelector(getIsAllowedPasswordReset);
  const { from } = location.state || { from: "/" };

  if (!loggedIn && !onlyUnAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  } else if (onlyAllowed && !allowPasswordReset) {
    return <Navigate to="/forgot-password" replace />
  } else if (loggedIn && onlyUnAuth) {
    return <Navigate to={from} replace />
  } else return element;
}

export default ProtectedRouteElement;