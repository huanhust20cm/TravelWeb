import { FC, Suspense, useEffect } from 'react';
import { BrowserRouter as ReactRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { LoadingProvider } from '../context/useLoading';

const RouteList = (list: IRouter.IRoute[]) => {
  return list?.map?.((route) => RouteItem(route)).filter((item) => item);
};

const RouteItem = (route: IRouter.IRoute) => {
  const routerProps: A = {};
  if (route.exact) {
    routerProps.exact = true;
  }
  return route.index ? (
    <Route index key={route.name} element={renderSuspense(route)} />
  ) : (
    <Route {...routerProps} key={route.name} path={route.path} element={renderSuspense(route)}>
      {RouteList(route.children ?? [])}
    </Route>
  );
};

const renderSuspense = (route: IRouter.IRoute): React.ReactNode => {
  if (route.redirectTo) {
    return <Redirect to={route.redirectTo} />;
  }
  if (!route.element) {
    return null;
  }

  return (
    <Suspense fallback={<></>}>
      <route.element />
    </Suspense>
  );
};

const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};
const Router: FC<IRouter.RouterProps> = (props) => {
  return (
    <>
      <ReactRouter>
        <LoadingProvider>
          {props.children}
          <Routes>{RouteList(props.routers)}</Routes>
        </LoadingProvider>
      </ReactRouter>
    </>
  );
};

export default Router;
