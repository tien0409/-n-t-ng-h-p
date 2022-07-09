import { Route, Routes } from 'react-router-dom';

import { HOME, PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/configs/routes';
import {AuthContext, AuthProvider, PrivateRoute} from '@/components';
import {useContext, useEffect} from 'react';

const App = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoute redirectTo={HOME} />}>
          {PRIVATE_ROUTES.map((route, index) => {
            const Comp = route.element;
            return (
              <Route key={index}  path={route.path} element={<Comp />} />
            );
          })}
        </Route>

        {PUBLIC_ROUTES.map((route, index) => {
          const Comp = route.element;
          return <Route key={index} path={route.path} element={<Comp />} />;
        })}
      </Routes>
    </AuthProvider>
  );
};

export default App;
