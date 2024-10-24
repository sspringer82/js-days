import { RouterProvider } from 'react-router-dom';
import router from './Router';

import './i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

const App: React.FC = () => {
  return (
    <>
      <LanguageSwitcher />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
