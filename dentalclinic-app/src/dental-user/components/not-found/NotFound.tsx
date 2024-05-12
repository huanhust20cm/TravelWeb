import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      <p className={styles.title}>Oops! Something went wrong...</p>
      <p className={styles.description}>
        Please try again later. If the issue persists, you can contact the administrator for assistance.
      </p>
      <Link to="/">
        <Button>Back to home page</Button>
      </Link>
    </div>
  );
};

export default NotFound;
