import ButtonSchedule from '@/dental-user/components/button-schedule/ButtonSchedule';
import { Col, DatePicker, Form, Input, Row, Select, TimePicker } from 'antd';
import { useWatch } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import styles from './ScheduleDental.module.scss';
import FreeConsultation from '@/dental-user/components/free-consultation/FreeConsultation';
import { useState } from 'react';

const ScheduleDental = () => {
  const [form] = Form.useForm();
  const { startDate } = useWatch([], form) ?? {};
  const doctorOption = [
    {
      label: 'Bác sĩ 1',
      value: 1
    },
    {
      label: 'Bác sĩ 2',
      value: 2
    },
    {
      label: 'Bác sĩ 3',
      value: 3
    }
  ];
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: A) => {
    const value = e.target.value;
    console.log(value);

    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };
  const onFinishSchedule = (val: A) => {
    console.log(val);
    console.log(123);
  };

  return (
    <>
      <div className={styles.schedule}>
        <h2>Đặt lịch ngay!</h2>
        <Form form={form} layout="vertical" onFinish={(val) => onFinishSchedule(val)}>
          <Row gutter={16}>
            <Col lg={12} sm={24}>
              <Form.Item label="Họ Tên" name="name" required>
                <Input />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24}>
              <Form.Item label="Số điện thoại" name="numberPhone" required>
                <Input value={phone} onChange={handlePhoneChange} maxLength={10} />
              </Form.Item>
            </Col>
          </Row>
          <div className="dt-flex dt-flex-wrap dt-gap-x-24">
            <div className="dt-flex dt-gap-8 dt-flex-grow1 datetime-picker">
              <Form.Item className="dt-w50" name="startDate" label="Thời gian đặt lịch">
                <DatePicker
                  className="dt-w100"
                  inputReadOnly
                  placeholder="Chọn ngày"
                  format="DD MMM YYYY"
                  disabledDate={(current) => current && current < dayjs().startOf('day')}
                />
              </Form.Item>
              <Form.Item className="dt-w50 pd-time" name="startTime" label=" ">
                <TimePicker
                  className="dt-w100"
                  inputReadOnly
                  placeholder="Chọn giờ và phút"
                  needConfirm
                  format={'HH:mm'}
                  disabledTime={(date) => {
                    const currentDate = date.startOf('day');
                    return {
                      disabledHours: () => {
                        if (startDate?.isAfter(currentDate)) {
                          return [];
                        } else if (startDate?.isSame(currentDate, 'day')) {
                          return Array(new Date().getHours())
                            .fill(0)
                            .map((_, i) => i);
                        } else {
                          return Array(24)
                            .fill(0)
                            .map((_, i) => i);
                        }
                      },
                      disabledMinutes: (hour) => {
                        if (
                          startDate?.isAfter(currentDate) ||
                          (startDate?.isSame(currentDate, 'day') && hour > new Date().getHours())
                        ) {
                          return [];
                        } else if (startDate?.isSame(currentDate, 'day') && hour === new Date().getHours()) {
                          return Array(new Date().getMinutes())
                            .fill(0)
                            .map((_, i) => i);
                        } else {
                          return Array(60)
                            .fill(0)
                            .map((_, i) => i);
                        }
                      }
                    };
                  }}
                />
              </Form.Item>
            </div>
          </div>
          <Form.Item label="Bác sĩ" name="doctor">
            <Select placeholder="Chọn bác sĩ" options={doctorOption} size="middle" />
          </Form.Item>
          <Form.Item label="Dịch vụ" name="serviceDental">
            <Select options={doctorOption} size="middle" placeholder="Chọn dịch vụ yêu cầu" />
          </Form.Item>
          <Form.Item label="Ghi chú" name="note">
            <TextArea />
          </Form.Item>
        </Form>
        <Row
          gutter={4}
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <ButtonSchedule className={styles.button} onClick={() => form.submit()} />
        </Row>
      </div>
      <FreeConsultation />
    </>
  );
};
export default ScheduleDental;
