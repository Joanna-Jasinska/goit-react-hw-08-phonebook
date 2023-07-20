import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { setError } from 'redux/auth/slice';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const LogoutPage = lazy(() => import('../pages/LogoutPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { error } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    // dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(setError(null));
      }, 2000);
    }
  }, [error, dispatch]);

  return isRefreshing ? (
    <b>
      <Loader txt="refreshingUser" />
    </b>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/logout"
            element={<PrivateRoute redirectTo="/" component={<LogoutPage />} />}
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
