import MenuLogo from '@/dental-user/components/menu-logo/MenuLogo';
import { AlignRightOutlined } from '@ant-design/icons';
import { Affix, Drawer } from 'antd';
import { MobileHeaderProps } from './MobileHeader.model';
import styles from './MobileHeader.module.scss';

const MobileHeader = (props: MobileHeaderProps) => {
  const { children, className, title, openMenu, onClose, open } = props;

  return (
    <>
      <Affix offsetTop={0} className={styles.mobileHeaderWrap}>
        <div className={`${styles.mobileHeader} ${className ? className : ''}`}>
          <div className="mobile-header-left">
            <MenuLogo />
            <div className="mobile-header-left-text">{title}</div>
          </div>
          <div className="mobile-header-right">
            <button className="mobile-header-right-btn dt-pointer" onClick={openMenu}>
              {<AlignRightOutlined />}
            </button>
          </div>
        </div>
      </Affix>

      <Drawer
        rootClassName={styles.drawer}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        className={styles.mobileLeftNav}
      >
        {/* <MenuLogo className="title-panel" /> */}
        {children}
      </Drawer>
    </>
  );
};
export default MobileHeader;
