import { ImageMapping } from '@/common/components/components.utils';
import { Button, Col, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import styles from './FreeConsultation.module.scss';

const FreeConsultation = () => {
  const [form] = Form.useForm();
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
  return (
    <div className={styles.contentContact}>
      <div className={styles.contentWrap}>
        <Col className={styles.postImage}>
          {/* <div className={styles.imageXl}> */}
          <img className={styles.imgDoctor} src={ImageMapping.Bs} alt="#" />
          {/* </div> */}
        </Col>
        <Col className={styles.serviceForm}>
          <Form layout="vertical" form={form}>
            <h2>Đăng ký dịch vụ tư vấn miễn phí</h2>
            <p>Vui lòng để lại thông tin của bạn tại đây, để chúng tôi có thể giúp bạn</p>
            <div className="dt-flex dt-flex-wrap dt-gap-x-24">
              <div className="dt-flex dt-gap-8 dt-flex-grow1">
                <Form.Item required className="dt-w50" name="name" label="Họ và tên">
                  <Input></Input>
                </Form.Item>
                <Form.Item required className="dt-w50 pd-time" name="phoneNumber" label="Số điện thoại">
                  <Input></Input>
                </Form.Item>
              </div>
            </div>
            <Form.Item label="Dịch vụ" name="serviceDental">
              <Select options={doctorOption} size="middle" placeholder="Chọn dịch vụ yêu cầu" />
            </Form.Item>
            <Form.Item label="Ghi chú" name="note">
              <TextArea />
            </Form.Item>
          </Form>
          <div className={styles.footerService}>
            <Button type="primary">Đặt lịch tư vấn</Button>
          </div>
        </Col>
      </div>
    </div>
  );
};
export default FreeConsultation;
