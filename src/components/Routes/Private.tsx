import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '@/components';

type Props = {
  redirectTo: string;
};

const PrivateRoute = ({ redirectTo }: Props) => {
  const location = useLocation();

  const {isAuthen} = useContext(AuthContext);
  return isAuthen ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};

export default PrivateRoute;
