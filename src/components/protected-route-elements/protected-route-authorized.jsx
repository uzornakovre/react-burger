import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from '../../utils/constants';

const ProtectedRouteAuthorized = ({ element: Component, ...props }) => {
  const location = useLocation();
  const { from } = location.state || { from: "/" }
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    loggedIn ? <Navigate to={from} replace /> : <Component {...props} /> 
  )
}

export default ProtectedRouteAuthorized;