import { useAppSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getIsLoggedIn } from "../../utils/constants";

const ProtectedRouteAuthorized = ({
  element: Component,
  ...props
}: TProtectedRouteProps) => {
  const location = useLocation();
  const { from } = location.state || { from: "/" };
  const loggedIn: boolean = useAppSelector(getIsLoggedIn);
  return loggedIn ? <Navigate to={from} replace /> : <Component {...props} />;
};

export default ProtectedRouteAuthorized;
