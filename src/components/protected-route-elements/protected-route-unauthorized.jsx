import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from '../../utils/constants';

const ProtectedRouteUnauthorized = ({ element: Component, ...props }) => {
  const location = useLocation();
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    !loggedIn ? <Navigate to="/login" state={{ from: location }} replace /> : <Component {...props} /> 
  )
}

export default ProtectedRouteUnauthorized;