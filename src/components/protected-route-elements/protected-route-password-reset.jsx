import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAllowedPasswordReset } from '../../utils/constants';

const ProtectedRoutePasswordReset = ({ elem: Component, ...props }) => {
  const allowPasswordReset = useSelector(getIsAllowedPasswordReset);
  return (
    !allowPasswordReset ? <Navigate to="/forgot-password" replace /> : <Component {...props} /> 
  )
}

export default ProtectedRoutePasswordReset;