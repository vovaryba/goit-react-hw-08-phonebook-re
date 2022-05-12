import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar';
import * as authOperations from 'redux/auth/authOperations';
import * as authSelectors from 'redux/auth/authSelectors';
import PrivateRoute from 'components/PrivatRoute.js';
import PublicRoute from 'components/PublicRoute.js';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage.js' /* webpackChunkName: "register-page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage/LoginPage.js' /* webpackChunkName: "login-page" */),
);
const PhonebookPage = lazy(() =>
  import(
    './pages/PhonebookPage/PhonebookPage.js' /* webpackChunkName: "phonebook-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage/NotFoundPage.js' /* webpackChunkName: "not-found-page" */
  ),
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <PhonebookPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>

        <ToastContainer autoClose={3000} />
      </Suspense>
    )
  );
};

export default App;
