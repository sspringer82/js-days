import List from './components/List';
import Form from './components/Form';
import NotFound from './components/NotFound';
import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';
import Details from './components/Details';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../api/users.api';
import { User } from '../types/User';

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
      const formData = await request.formData();
      const user = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
      } as User;
      if (!params.id) {
        await createUser(user);
      } else {
        await updateUser({ ...user, id: params.id });
      }
      return redirect('/list');
    },
  },
  {
    path: '/edit/:id',
    element: <Form />,
    loader: async ({ params }) => {
      return getUserById(params.id!);
    },
    action: async ({ request, params }) => {
      const formData = await request.formData();
      const user = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
      } as User;
      if (!params.id) {
        await createUser(user);
      } else {
        await updateUser({ ...user, id: params.id });
      }
      return redirect('/list');
    },
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
