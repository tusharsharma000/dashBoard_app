// PrivateRoute.js
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PrivateRoute = ({ path, element }: any) => {
  const token = useSelector((state: RootState) => state.auth.token);

  return token ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default PrivateRoute;
