import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../utils/constants';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const loggedIn = useSelector(getIsLoggedIn);
  return (
    !loggedIn ? <Navigate to="/login" replace /> : <Component {...props} /> 
  )
}

export default ProtectedRouteElement;