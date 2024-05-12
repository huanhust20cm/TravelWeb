import { useUtils } from '@/common/utils';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { FC, ReactNode } from 'react';
import styles from './ExplandCard.module.scss';
import { useWindowInnerWidth } from './hook/useWindowWidth';

interface ExpandCardProps {
  id: string;
  title?: string;
  isExpand: boolean;
  setExpand: (value: string[], isExpand: boolean) => void;
  children: ReactNode;
  shouldWrapExtraHeaderContent?: boolean;
}

const ExpandCard: FC<ExpandCardProps> = ({
  id,
  title,
  isExpand,
  setExpand,
  children,
  shouldWrapExtraHeaderContent = true
}) => {
  const { combineClassNames } = useUtils();
  const { isMobile } = useWindowInnerWidth();

  const onRenderHeader = () => (
    <div
      className={combineClassNames(styles.headerWrapper, isExpand && styles.expand, isMobile && styles.dtBlock)}
      onClick={() => setExpand([id], !isExpand)}
    >
      <div className={styles.header} style={{ marginTop: isMobile && !shouldWrapExtraHeaderContent ? '3px' : '0' }}>
        <div className={styles.titleHeader}>
          <div className={combineClassNames(styles.name, 'dt-one-rows')}>{title}</div>
        </div>
        <div className={styles.headerExtraContent}>
          <div className={styles.expandIcon} onClick={() => setExpand([id], !isExpand)}>
            {isExpand ? <UpOutlined /> : <DownOutlined />}
          </div>
        </div>
      </div>
    </div>
  );

  const onRenderContent = () => {
    return (
      <div
        className={styles.detailContent}
        style={{
          gridTemplateRows: isExpand ? '1fr' : '0fr'
        }}
      >
        <div>
          <div className="dt-p-16">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.expandCard}>
      {onRenderHeader()}
      {onRenderContent()}
    </div>
  );
};

export default ExpandCard;
