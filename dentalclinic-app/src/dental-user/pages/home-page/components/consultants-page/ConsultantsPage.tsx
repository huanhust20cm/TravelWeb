import ConsultantItem from '@/dental-user/components/consultants-item/ConsultantItem';
import styles from './ConsultantPage.module.scss';
import ItemView from '@/dental-user/components/item-view-details/ItemView';
import { ImageMapping } from '@/common/components/components.utils';

const ConsultantPage = () => {
  const itemDoctor = [
    {
      name: 'BS.Phạm Hồng Đức',
      id: '1234',
      img: `${ImageMapping.Bs}`,
      descreption: true
    },
    {
      name: 'BS.Phạm Hồng Đức 2',
      id: '12345',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức 3',
      id: '12346',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức',
      id: '12343',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức 2',
      id: '123454',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức 3',
      id: '123465',
      img: `${ImageMapping.Bs}`
    }
  ];
  return (
    <div className={styles.consultantWrap}>
      <ConsultantItem />
      <ItemView itemData={itemDoctor} isButtonNavigate={true} isHasButton={false} />
    </div>
  );
};
export default ConsultantPage;
