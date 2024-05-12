import { useScroll } from '@/common/utils';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { BackToTopProps } from './BackToTop.mdel';
import styles from './BackToTop.module.scss';

const BackToTop = (props: BackToTopProps) => {
  const { className } = props;
  const { scrollBodyTop } = useScroll();
  const [isShow, setIsShow] = useState(false);

  const scrollFunc = () => {
    const scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    setIsShow(scrollTop > 844);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollFunc);
    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, []);

  const getButtonStyle = () => {
    let result = styles.backToTop;
    if (className) {
      result += ` ${className}`;
    }
    if (!isShow) {
      result += ` ${styles.hide}`;
    }
    return result;
  };
  return (
    <div className={getButtonStyle()} onClick={scrollBodyTop}>
      <ArrowUpOutlined />
    </div>
  );
};

export default BackToTop;
