import { Button } from 'antd';
import { ImageMapping } from '../components.utils';
import styles from './ButtonViewDetails.module.scss';

interface IButtonViewProps {
  onClick?: () => void;
  className?: string;
  title?: string;
}

const ButtonViewDetails = (props: IButtonViewProps) => {
  const { onClick, className, title } = props;
  return (
    <Button
      className={className ? `${styles.buttonView} ${className}` : styles.buttonView}
      type="link"
      onClick={onClick}
    >
      {title ?? ' Xem chi tiết'}
      <img alt="#" src={ImageMapping.MoreInfor} />
    </Button>
  );
};

export default ButtonViewDetails;
