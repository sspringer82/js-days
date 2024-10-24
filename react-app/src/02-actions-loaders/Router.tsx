import List from './components/List';
import Form from './components/Form';
import NotFound from './components/NotFound';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Details from './components/Details';
import { getAllUsers, getUserById } from '../api/users.api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/list" replace />,
  },
  {
    path: '/list',
    element: <List />,
    loader: getAllUsers,
  },
  {
    path: '/create',
    element: <Form />,
    action: async ({ request, params }) => {
      console.log(request);
      console.log(params);
    },
  },
  {
    path: '/edit/:id',
    element: <Form />,
  },
  {
    path: '/details/:id',
    element: <Details />,
    loader: async ({ params }) => {
      const user = await getUserById(params.id!);
      return user;
    },
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
