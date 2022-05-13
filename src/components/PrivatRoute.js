import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}

export default PrivateRoute;
