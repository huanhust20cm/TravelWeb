import { useNavigate } from 'react-router';
import styles from './MenuLogo.module.scss';
interface MenuLogoProps {
  extra?: React.ReactNode;
  className?: string;
}
const MenuLogo = (props: MenuLogoProps) => {
  const { extra, className } = props;

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <div className={styles.menuLogo}>
      <div onClick={goHome} className={styles.menuLogoBtn}>
        {/* <img src={Logo} alt="" className={styles.logoIcon} /> */}
        <div className={styles.titleBox}>
          <div className={className ? className : styles.title}>Thien Ha</div>
        </div>
      </div>
      <div className={styles.extra}>{extra}</div>
    </div>
  );
};

export default MenuLogo;
