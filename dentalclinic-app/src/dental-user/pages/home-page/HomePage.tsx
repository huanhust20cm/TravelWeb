import { ImageMapping } from '@/common/components/components.utils';
import Banner from '@/dental-user/components/banner/Banner';
import DoctorsTeam from '@/dental-user/components/doctors/DoctorsTeam';
import ItemView from '@/dental-user/components/item-view-details/ItemView';
import ConsultantPage from './components/consultants-page/ConsultantsPage';
import HistoryDental from './components/history-dental/HistoryDental';
import ServiceHome from './components/service-homepage/ServiceHome';
import SmileCare from './components/smile-care/SmileCare';

const HomePage = () => {
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
    <>
      <Banner />
      <ServiceHome />
      <HistoryDental />
      <DoctorsTeam />
      <SmileCare />
      <ItemView itemData={itemDoctor} isButtonNavigate={true} isHasButton={false} />
      <ConsultantPage />
    </>
  );
};

export default HomePage;
