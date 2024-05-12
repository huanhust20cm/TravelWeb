import ButtonViewDetails from '@/common/components/button-view-details/ButtonViewDetails';
import { ImageMapping } from '@/common/components/components.utils';
import ServiceUser from '@/dental-user/components/service-user/ServiceUser';
import { Col } from 'antd';
import style from './ServiceHome.module.scss';
import { useNavigate } from 'react-router';
interface IService {
  key: string;
  title: string;
  path: string;
  src: string;
}
const itemsService = [
  {
    title: 'Bọc răng sứ thẩm mỹ',
    key: '1',
    src: `${ImageMapping.Dv1}`,
    path: '/schedule'
  },
  {
    title: 'Trồng răng Implant',
    key: '2',
    src: `${ImageMapping.Dv1}`,
    path: '/'
  },
  {
    title: 'Trồng răng Implant toàn hàm',
    key: '3',
    src: `${ImageMapping.Dv1}`,
    path: '/'
  },
  {
    title: 'Hàm tháo lắp',
    key: '4',
    src: `${ImageMapping.Dv1}`,
    path: '/'
  },
  {
    title: 'Tẩy trắng răng',
    key: '5',
    src: `${ImageMapping.Dv1}`,
    path: '/'
  },
  {
    title: 'Niềng răng',
    key: '6',
    src: `${ImageMapping.Dv1}`,
    path: '/'
  }
];
const ServiceHome = () => {
  const navigate = useNavigate();
  const handleViewService = () => {
    console.log(123);
  };
  const onNavigate = (item: IService) => {
    navigate(item?.path);
  };
  return (
    <div className={style.serviceHomepage}>
      <Col className={style.serviceTitle}>
        <div className={style.title}>
          Dịch vụ từ tâm cho <span className={style.titleSub}>trải nghiệm xứng tầm</span>
        </div>
        <ButtonViewDetails onClick={handleViewService} />
      </Col>
      <Col className={style.gridService}>
        {itemsService.map((item: IService) => {
          return (
            <Col key={item?.key} className={style.services}>
              <ServiceUser srcImg={item?.src} title={item.title} onClick={() => onNavigate(item)} />
            </Col>
          );
        })}
      </Col>
    </div>
  );
};
export default ServiceHome;
