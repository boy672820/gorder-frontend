import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import MainLayout from '../layouts/main';
import Order from '../pages/Order';
import { LoadingScreen } from '../components';
import { PATH_PAGE } from './paths';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: PATH_PAGE.page500, element: <Page500 /> },
        { path: PATH_PAGE.page404, element: <Page404 /> },
        { path: PATH_PAGE.page403, element: <Page403 /> },
        { path: '*', element: <Navigate to={PATH_PAGE.page404} replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Navigate to={PATH_PAGE.order} replace /> },
        { path: PATH_PAGE.order, element: <Order /> },
      ],
    },
    { path: '*', element: <Navigate to={PATH_PAGE.page404} replace /> },
  ]);
}

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
