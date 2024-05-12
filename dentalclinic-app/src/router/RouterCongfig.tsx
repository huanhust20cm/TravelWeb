import { lazy } from 'react';
import HomePage from './routers/HomePageRouter';
import Schedule from './routers/ScheduleDentalRouter';

const NotFound = lazy(() => import('../dental-user/components/not-found/NotFound'));
const Layout = lazy(() => import('../AppLayout'));
const AdminLayout = lazy(() => import('../AdminAppLayout'));

export const routers: IRouter.IRoute[] = [
  {
    path: '/',
    element: Layout,
    name: 'layout',
    meta: { pageTitle: 'layout' },
    children: [...HomePage, ...Schedule]
  },
  {
    path: '/admin',
    element: AdminLayout,
    name: 'adminlayout',
    meta: { pageTitle: 'adminlayout' },
    children: []
  },
  { path: '/404', name: '404page', element: NotFound, meta: { pageTitle: '404' } },
  { path: '*', name: '404', element: NotFound, meta: { pageTitle: '404' } }
];
