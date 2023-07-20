import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../utils/constants';

const ProtectedRouteUnauthorized = ({ element: Component, ...props }) => {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    !loggedIn ? <Navigate to="/login" replace /> : <Component {...props} /> 
  )
}

export default ProtectedRouteUnauthorized;