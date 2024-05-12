import { Affix, Layout, Row } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import LeftNav from '../left-nav/LeftNav';
import styles from './AdminLayout.module.scss';
import LoginNav from '../login-nav/LoginNav';
import Editor from '../editor/Editor';

export interface IProps {
  children?: React.ReactNode;
}
const MENU_WIDTH = 221;
const AdminLayout: React.FC<IProps> = (props) => {
  const { Content } = Layout;

  return (
    <>
      <Layout className={styles.masterLayout}>
        {/* <LoginNav/> */}
        <Sider
          className={`${styles.masterSider} dt-scrollbar`}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            transition: 'none 0s ease 0s',
            background: '#1e72b0'
          }}
          collapsible
          collapsed={false}
          width={MENU_WIDTH}
          trigger={null}
        >
          <LeftNav />

        </Sider>
        <Layout className={styles.siteLayout}>
          <Affix className={styles.siteLayoutAffix} offsetTop={0}>
            <Header style={{ padding: 0, background: '#fff', borderBottom: `1px solid #EEF2F5` }}>
              <Row justify="space-between" align="middle" style={{ height: '100%' }}>
              </Row>
            </Header>
          </Affix>
          <Content className={styles.content}>
            <div className={styles.contentCard}>{props.children}</div>

          </Content>
        </Layout>
        <Editor/>

      </Layout>
    </>
  );
};

export default React.memo(AdminLayout);
