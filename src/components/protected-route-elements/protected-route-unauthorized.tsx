import { useAppSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getIsLoggedIn } from "../../utils/constants";
import { TProtectedRouteAuthorizedProps } from "../../types/protected-route";

const ProtectedRouteUnauthorized = ({
  element: Component,
  ...props
}: TProtectedRouteAuthorizedProps) => {
  const location = useLocation();
  const loggedIn = useAppSelector(getIsLoggedIn);
  return !loggedIn ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Component {...props} />
  );
};

export default ProtectedRouteUnauthorized;
