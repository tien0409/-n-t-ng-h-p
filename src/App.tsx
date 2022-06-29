import { Route, Routes } from 'react-router-dom';
import { HOME } from './configs/routes';
import { HomePage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
    </Routes>
  );
};

export default App;
