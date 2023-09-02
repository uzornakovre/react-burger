import { useAppSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import {
  getIsLoggedIn,
  getIsAllowedPasswordReset,
} from "../../services/auth/selectors";
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

  if (!loggedIn && !onlyUnAuth) {
    return (
      <Navigate
        to="/login"
        state={{
          backgroundLocation: location.state?.backgroundLocation,
          previousLocation: location,
        }}
        replace
      />
    );
  } else if (onlyAllowed && !allowPasswordReset) {
    return <Navigate to="/forgot-password" replace />;
  } else if (loggedIn && onlyUnAuth) {
    const { previousLocation } = location.state || { previousLocation: "/" };
    return (
      <Navigate
        to={previousLocation}
        state={{
          backgroundLocation: location.state?.backgroundLocation,
          previousLocation: location,
        }}
        replace
      />
    );
  } else {
    return element;
  }
};

export default ProtectedRouteElement;
