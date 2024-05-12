import { SmileOutlined } from '@ant-design/icons';
import styles from './TableEmpty.module.scss';
const TableEmpty = () => {
  return (
    <div className={styles.tableEmpty}>
      <SmileOutlined />
      <div className="table-empty-text">Data Not Found</div>
    </div>
  );
};

export default TableEmpty;
