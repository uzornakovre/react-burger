import { useAppSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getIsLoggedIn } from "../../utils/constants";

const ProtectedRouteUnauthorized = ({
  element: Component,
  ...props
}: TProtectedRouteProps) => {
  const location = useLocation();
  const loggedIn: boolean = useAppSelector(getIsLoggedIn);
  return !loggedIn ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Component {...props} />
  );
};

export default ProtectedRouteUnauthorized;
