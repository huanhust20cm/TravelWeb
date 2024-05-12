import { routers } from '@/router/RouterCongfig';
import { Menu, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { matchRoutes } from 'react-router-dom';
import ButtonSchedule from '../button-schedule/ButtonSchedule';
import styles from './MenuNav.module.scss';
import { ImageMapping } from '@/common/components/components.utils';

interface IMenutNavProps {
  onMenuClick?: (key: string) => void;
  mode?: A;
}
type MenuItem = Required<MenuProps>['items'][number];
export type CustomMenuItem = MenuItem & {
  path?: string;
  children?: CustomMenuItem[];
};
interface IMenuClickEvent {
  key: string;
  keyPath: string[];
}
const items: CustomMenuItem[] = [
  {
    label: <img className={styles.logoMobile} alt="#" src={ImageMapping.Logo} />,
    key: 'icon',
    className: 'icon-menu',
    path: '/'
  },
  {
    label: 'Trang chủ',
    key: 'homepage',
    path: '/'
  },
  {
    label: 'Về chúng tôi',
    key: 'aboutus',
    path: '/about-us',
    children: [
      {
        label: '15 năm hình thành và phát triển',
        key: 'aboutus1',
        path: '/about-us/lich-su-phat-trien',
        className: 'sub-menu-title'
      },
      {
        label: 'Cơ sở vật chất',
        key: 'aboutus2',
        path: '/about-us/history-development',
        className: 'sub-menu-title'
      },
      {
        label: 'Không gian phòng khám',
        key: 'aboutus3',
        path: '/about-us/view-dental-clinic',
        className: 'sub-menu-title'
      },
      {
        label: 'Tin tức - sự kiện',
        key: 'aboutus4',
        path: '/about-us/news',
        className: 'sub-menu-title'
      }
    ]
  },
  {
    label: 'Dịch vụ',
    key: 'service',
    path: '/our-services',
    children: [
      {
        label: 'Bọc răng sứ thẩm mỹ',
        key: 'service1',
        className: 'sub-menu-title'
      },
      {
        label: 'Trồng răng Implant',
        key: 'service2',
        className: 'sub-menu-title'
      },
      {
        label: 'Trồng răng Implant toàn hàm',
        key: 'service3',
        className: 'sub-menu-title'
      },
      {
        label: 'Hàm tháo lắp',
        key: 'service4',
        className: 'sub-menu-title'
      },
      {
        label: 'Tẩy trắng răng',
        key: 'service5',
        className: 'sub-menu-title'
      },
      {
        label: 'Niềng răng',
        key: 'service6',
        className: 'sub-menu-title'
      },
      {
        label: 'Nhổ răng khôn',
        key: 'service7',
        className: 'sub-menu-title'
      }
    ]
  },
  {
    label: 'Đội ngũ bác sĩ',
    key: 'doctors',
    path: '/'
  },
  {
    label: 'Khách hàng',
    key: 'client',
    path: '/'
  },
  {
    label: 'Chuyên gia tư vấn',
    key: 'consultants',
    path: '/'
  },
  {
    label: 'Video',
    key: 'videos',
    path: '/'
  },
  {
    label: 'Kiến thức nha khoa',
    key: 'dentalKnowledge',
    path: '/dental-knowledge',
    children: [
      {
        label: 'Bọc răng sứ',
        key: 'dentalKnowledge1',
        className: 'sub-menu-title'
      },
      {
        label: 'Implant',
        key: 'dentalKnowledge2',
        className: 'sub-menu-title'
      },
      {
        label: 'Niềng răng',
        key: 'dentalKnowledge3',
        className: 'sub-menu-title'
      }
    ]
  },
  {
    label: <ButtonSchedule />,
    path: '/schedule',
    key: 'schedule',
    className: 'button-menu'
  }
];

const MenuNav: React.FC<IMenutNavProps> = (props) => {
  const [selectedKey, setSelectedKey] = useState<string[]>(['/']);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const matchRoutesList = matchRoutes(routers as A, location);
    if (matchRoutesList?.length && matchRoutesList.length > 0) {
      const theRouteDetails = matchRoutesList[matchRoutesList.length - 1];
      const theRoute = theRouteDetails?.route as A;
      const currentKey = theRoute?.meta?.leftKey;
      if (currentKey) {
        const activeKey = findItemNodeByKeyOrPath('key', currentKey);
        if (activeKey) {
          setSelectedKey([activeKey.key as string]);
          return;
        }
      } else {
        setSelectedKey(['']);
        getIncludeKeyByPath(theRoute.path);
        return;
      }
    } else {
      getIncludeKeyByPath(location.pathname);
    }
  }, [location.pathname]);

  const getIncludeKeyByPath = (pathName?: string) => {
    const defaultPathList = pathName?.split('/');
    const defaultPath = `/${defaultPathList?.[1] ?? ''}`;
    const currentInclude = items.find((item) => item.path?.includes(defaultPath));
    if (currentInclude) {
      setSelectedKey([currentInclude.key as string]);
    }
  };

  const menuClick = (info: IMenuClickEvent) => {
    if (info.key) {
      setSelectedKey([info.key]);
      const path = findItemNodeByKeyOrPath('key', info.key)?.path;
      path && navigate(path);
      props?.onMenuClick?.(info.key);
    }
  };

  const findItemNodeByKeyOrPath = (key: 'key' | 'path', keyValue: string): CustomMenuItem | null => {
    if (!items || !keyValue) return null;
    const treeList = [...items];
    while (treeList.length > 0) {
      const treeItem = treeList.shift();
      if (!treeItem) return null;
      if (treeItem[key] === keyValue) {
        return treeItem;
      }
      treeItem.children?.forEach((child) => {
        treeList.push(child as CustomMenuItem);
      });
    }
    return null;
  };

  return (
    <Menu
      onClick={menuClick}
      selectedKeys={selectedKey}
      className={styles.menuNav}
      mode={props.mode ?? 'horizontal'}
      items={items}
      overflowedIndicator={false}
    />
  );
};

export default React.memo(MenuNav);
