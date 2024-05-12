import { ImageMapping } from '@/common/components/components.utils';
import { Button } from 'antd';
import styles from './ButtonSchedule.module.scss';
interface IButtonProps {
  className?: string;
  onClick?: () => void;
}
const ButtonSchedule = (props: IButtonProps) => {
  const { className, onClick } = props;
  return (
    <Button
      className={className ? className : styles.buttonSchedule}
      onClick={onClick}
      type="primary"
      icon={<img style={{ width: '25px' }} src={ImageMapping.Schedule} alt="#" />}
    >
      Đặt lịch hẹn
    </Button>
  );
};
export default ButtonSchedule;
