import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { LoadingScreen } from '../components';
import { PATH_AUTH, PATH_PAGE } from './paths';
// layouts
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import MainLayout from '../layouts/main';

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
        { path: PATH_PAGE.pickup, element: <Pickup /> },
        { path: PATH_PAGE.receipt, element: <Receipt /> },
      ],
    },
    {
      path: PATH_AUTH.root,
      element: <LogoOnlyLayout />,
      children: [
        { path: PATH_AUTH.signin, element: <SignIn /> },
        { path: PATH_AUTH.redirect, element: <RedirectSlack /> },
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

const Order = Loadable(lazy(() => import('../pages/Order')));
const Pickup = Loadable(lazy(() => import('../pages/Pickup')));
const Receipt = Loadable(lazy(() => import('../pages/Receipt')));

const SignIn = Loadable(lazy(() => import('../pages/auth/SignIn')));
const RedirectSlack = Loadable(lazy(() => import('../pages/auth/RedirectSlack')));
