import { routers } from '@/router/RouterCongfig';
import { Button, Checkbox, Form, FormProps, Input, Menu, MenuProps } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router';
import styles from './LoginNav.module.scss';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LeftNav: React.FC = () => {
  return (
    <div className={styles.formcontainer}>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
    <div className={styles.centerText}>
      <h2>Đăng nhập</h2>
    </div>
    <Form.Item<FieldType>
      label="Tài khoản"
      name="username"
      rules={[{ required: true, message: 'Vui lòng điền tên tài khoản!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Mật khẩu"
      name="password"
      rules={[{ required: true, message: 'Vui lòng điền mật khẩu!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Nhớ mật khẩu</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Đăng nhập
      </Button>
    </Form.Item>
  </Form>
    </div>
  );
};

export default React.memo(LeftNav);
