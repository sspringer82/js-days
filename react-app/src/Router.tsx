import { createBrowserRouter } from 'react-router-dom';
import List from './List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
  },
]);

export default router;
