import { Col } from 'antd';
import ReactPlayer from 'react-player';
import style from './HistoryDental.module.scss';
import ButtonViewDetails from '@/common/components/button-view-details/ButtonViewDetails';
import { useNavigate } from 'react-router';

const HistoryDental = () => {
  const navigate = useNavigate();
  return (
    <div className={style.youtubeVideo}>
      <Col className={style.youtubeText}>
        <div className="title">Nha khoa Lavie</div>
        <h2 className="title-history"> 15 năm xây dựng và phát triển</h2>
        <ButtonViewDetails className={style.buttonDetail} onClick={() => navigate('/service')} />
      </Col>
      <Col className={style.youtubePlayer}>
        <ReactPlayer url="https://www.youtube.com/watch?v=cfvoqy-aREg" />
      </Col>
    </div>
  );
};
export default HistoryDental;
