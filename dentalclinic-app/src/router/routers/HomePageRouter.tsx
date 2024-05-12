import { lazy } from 'react';

const HomePage = lazy(() => import('@/dental-user/pages/home-page/HomePage'));

const routes: IRouter.IRoute<'/'>[] = [
  {
    path: '/',
    name: 'homepage',
    exact: true,
    element: HomePage,
    meta: { pageTitle: 'HomePage' }
  }
];

export default routes;
