import { Col, Row } from 'antd';
import styles from './ServiceUser.module.scss';

interface IService {
  srcImg?: string;
  title?: string;
  onClick: () => void;
}
const ServiceUser = (props: IService) => {
  const { srcImg, title, onClick } = props;
  return (
    <div onClick={onClick} className={styles.serviceWrap}>
      <Col className={styles.servicewidget}>
        <Row className={styles.iconDv}>
          <img src={srcImg} alt="#" />
        </Row>
        <Row className={styles.titleDv}>{title}</Row>
      </Col>
    </div>
  );
};
export default ServiceUser;
