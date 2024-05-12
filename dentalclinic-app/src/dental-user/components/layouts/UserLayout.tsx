import MobileHeader from '@/common/components/mobile-header/MobileHeader';
import { Affix, Layout } from 'antd';
import React, { useState } from 'react';
import FooterNav from '../footer/FooterNav';
import InfoHeader from '../infor-header/InforHeader';
import MenuNav from '../menu/MenuNav';
import styles from './LayoutUser.module.scss';
export interface IProps {
  children?: React.ReactNode;
}
const UserLayout: React.FC<IProps> = (props) => {
  const { Content } = Layout;
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  const openMenu = () => {
    setOpen(true);
  };
  return (
    <>
      <Layout className={styles.masterLayout}>
        <MobileHeader open={open} onClose={onClose} openMenu={openMenu}>
          <MenuNav onMenuClick={onClose} mode="inline" />
        </MobileHeader>
        <Affix className={styles.siteLayoutAffix} offsetTop={0}>
          <InfoHeader />
          <MenuNav />
        </Affix>
        <Layout className={styles.siteLayout}>
          <Content className={styles.content}>
            <div className={styles.contentCard}>{props.children}</div>
          </Content>
        </Layout>
        <FooterNav />
      </Layout>
    </>
  );
};

export default React.memo(UserLayout);
