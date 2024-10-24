import { createBrowserRouter, Navigate } from 'react-router-dom';
import List from './components/List';
import Details from './components/Details';
import NotFound from './components/NotFound';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const router = createBrowserRouter([
  {
    path: '/list',
    element: (
      <Suspense fallback={<div>...loading</div>}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <List />
        </ErrorBoundary>
      </Suspense>
    ),
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
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
