import { lazy } from 'react';

const Schedule = lazy(() => import('@/dental-user/pages/schedule/ScheduleDental'));

const routes: IRouter.IRoute<'/schedule'>[] = [
  {
    path: '/schedule',
    name: 'schedule',
    exact: true,
    element: Schedule,
    meta: { pageTitle: 'schedule' }
  }
];

export default routes;
