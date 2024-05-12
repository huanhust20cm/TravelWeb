import Router from '@/common/router/router';
import { ConfigProvider, App as AntdApp } from 'antd';
import { routers } from './router/RouterCongfig';
import theme from './theme';

const App = () => {
  return (
    <>
      <ConfigProvider theme={theme}>
        <AntdApp style={{ height: '100%' }}>
          <Router routers={routers}></Router>
        </AntdApp>
      </ConfigProvider>
    </>
  );
};

export default App;
