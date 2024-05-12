import ButtonViewDetails from '@/common/components/button-view-details/ButtonViewDetails';
import { List } from 'antd';
import { PaginationConfig } from 'antd/es/pagination';
import { useEffect, useMemo, useState } from 'react';
import ExpandCard from '../expand-card/ExpandCard';
const itemDoctor = [
  {
    name: 'BS.Phạm Hồng Đức',
    id: '1234'
  },
  {
    name: 'BS.Phạm Hồng Đức 2',
    id: '12345'
  },
  {
    name: 'BS.Phạm Hồng Đức 3',
    id: '1236'
  },
  {
    name: 'BS.Phạm Hồng Đức',
    id: '12347'
  },
  {
    name: 'BS.Phạm Hồng Đức 2',
    id: '12348'
  },
  {
    name: 'BS.Phạm Hồng Đức 3',
    id: '12349'
  }
];

interface IConsultantItem {
  pagination?: PaginationConfig | false;
  isShowButton?: boolean;
}
const ConsultantItem = ({ pagination, isShowButton = true }: IConsultantItem) => {
  const [extendedYouthList, setExtendedItemList] = useState<(A & { isExpand: boolean })[]>([]);
  const selectedItemIDs = itemDoctor.map((item) => item.id);
  const selectedItemIDsSet = useMemo(() => new Set(selectedItemIDs), [selectedItemIDs]);

  useEffect(() => {
    setExtendedItemList(itemDoctor.map((item) => ({ ...item, isExpand: false })));
  }, []);

  const selectedItemList = useMemo(() => {
    return extendedYouthList.filter((item) => selectedItemIDsSet.has(item.id));
  }, [extendedYouthList, selectedItemIDs, selectedItemIDsSet]);

  const setExpandItems = (values: (string | undefined)[], isExpand: boolean) => {
    const newListItem = [...extendedYouthList];
    values.forEach((value) => {
      const currentUserIndex = newListItem.findIndex((user) => user.id === value);

      if (currentUserIndex > -1) {
        newListItem[currentUserIndex].isExpand = isExpand;
      }
    });

    setExtendedItemList(newListItem);
  };
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={selectedItemList}
      pagination={pagination}
      footer={isShowButton && <ButtonViewDetails title="Xem thêm bài viết" />}
      renderItem={(item) => (
        <ExpandCard id={item.id} isExpand={item.isExpand} setExpand={setExpandItems} title={item?.name}>
          <div className="item">
            <div className="box-item">
              <div className="titleItem">Răng trám lâu ngày bị nhức – hiểu đúng nguyên nhân!</div>
            </div>
            <ButtonViewDetails />
          </div>
        </ExpandCard>
      )}
    />
  );
};

export default ConsultantItem;
