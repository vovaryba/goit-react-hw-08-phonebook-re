import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from 'redux/auth/authSelectors';

function PublicRoute({ children, redirectTo = '/' }) {
  //   const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return (
      <Navigate
        to={redirectTo}
        //   state={{ from: location }}
      />
    );
  }

  return children;
}

export default PublicRoute;
