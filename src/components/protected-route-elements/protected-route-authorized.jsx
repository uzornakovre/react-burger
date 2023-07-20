import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../utils/constants';

const ProtectedRouteAuthorized = ({ element: Component, ...props }) => {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    loggedIn ? <Navigate to="/" replace /> : <Component {...props} /> 
  )
}

export default ProtectedRouteAuthorized;