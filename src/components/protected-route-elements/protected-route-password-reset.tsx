import { useAppSelector } from "../../services/hooks";
import { Navigate } from "react-router-dom";
import { getIsAllowedPasswordReset } from "../../utils/constants";

const ProtectedRoutePasswordReset = ({
  elem: Component,
  ...props
}: TProtectedRouteProps) => {
  const allowPasswordReset = useAppSelector(getIsAllowedPasswordReset);
  return !allowPasswordReset ? (
    <Navigate to="/forgot-password" replace />
  ) : (
    <Component {...props} />
  );
};

export default ProtectedRoutePasswordReset;
