import styles from './InforHeader.module.scss';

const InfoHeader = () => {
  return (
    <div className={styles.contentHeader}>
      <ul className="nav-menu" id="navbar">
        <li className="number-phone">
          <a href="#" className="number-phone-1">
            01234567819
          </a>
        </li>
        <li className="text-15">
          <a href="#">Hỗ trợ</a>
        </li>
        <li className="text-15">
          <a href="#">Tuyển dụng</a>
        </li>
        <li className="text-15">
          <a href="#">Liên Hệ</a>
        </li>
        <li className="text-15">
          <a href="#">Đăng nhập</a>
        </li>
      </ul>
    </div>
  );
};
export default InfoHeader;
