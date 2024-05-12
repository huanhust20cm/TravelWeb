import { Outlet } from 'react-router-dom';
import UserLayout from '@/dental-user/components/layouts/UserLayout';
import { useLoading } from '@/common/utils';
import LazyLoading from '@/common/components/lazy-loading/LazyLoading';

const Layout = () => {
  const { isLoading } = useLoading();
  return (
    <>
      <UserLayout>
        <Outlet></Outlet>
      </UserLayout>
      {isLoading && <LazyLoading />}
    </>
  );
};

export default Layout;
