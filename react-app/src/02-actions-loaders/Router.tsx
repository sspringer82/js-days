import List from './components/List';
import Form from './components/Form';
import NotFound from './components/NotFound';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/list" replace />,
  },
  {
    path: '/list',
    element: <List />,
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
    path: '/details/:id',
    element: <Details />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
