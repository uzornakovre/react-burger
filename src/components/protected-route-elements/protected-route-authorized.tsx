import { useAppSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getIsLoggedIn } from "../../utils/constants";
import { TProtectedRouteUnauthorizedProps } from "../../types/protected-route";

const ProtectedRouteAuthorized = ({
  element: Component,
  ...props
}: TProtectedRouteUnauthorizedProps) => {
  const location = useLocation();
  const { from } = location.state || { from: "/" };
  const loggedIn = useAppSelector(getIsLoggedIn);
  return loggedIn ? <Navigate to={from} replace /> : <Component {...props} />;
};

export default ProtectedRouteAuthorized;
