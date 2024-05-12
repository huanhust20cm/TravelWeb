import { Outlet } from 'react-router';
import LazyLoading from './common/components/lazy-loading/LazyLoading';
import { useLoading } from './common/utils';
import AdminLayout from './dental-admin/components/layouts/AdminLayout';

const Layout = () => {
  const { isLoading } = useLoading();
  return (
    <>
      <AdminLayout>
        <Outlet></Outlet>
      </AdminLayout>
      {isLoading && <LazyLoading />}
    </>
  );
};

export default Layout;
