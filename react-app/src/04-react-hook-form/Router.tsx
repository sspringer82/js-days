import { createBrowserRouter, Navigate } from 'react-router-dom';
import List from './components/List';
import Details from './components/Details';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/list',
    element: <List />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '/',
    element: <Navigate to="/list" />,
  },
  {
    path: '/create',
    element: <Form />,
  },
  {
    path: '/edit/:id',
    element: <Form />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
