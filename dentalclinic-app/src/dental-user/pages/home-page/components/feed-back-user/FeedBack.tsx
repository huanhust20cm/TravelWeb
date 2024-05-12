import ButtonViewDetails from '@/common/components/button-view-details/ButtonViewDetails';
import { ImageMapping } from '@/common/components/components.utils';
import { useEffect, useMemo, useState } from 'react';
import styles from './ItemView.module.scss';

const ItemView = () => {
  const itemDoctor = [
    {
      name: 'BS.Phạm Hồng Đức',
      id: '1234',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức 2',
      id: '12345',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức 3',
      id: '1236',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức',
      id: '12347',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức 2',
      id: '12348',
      img: `${ImageMapping.Bs}`
    },
    {
      name: 'BS.Phạm Hồng Đức 3',
      id: '12349',
      img: `${ImageMapping.Bs}`
    }
  ];
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
    <div className={styles.itemView}>
      {selectedItemList.map((item) => {
        return (
          <ExpandCard
            key={item?.id}
            id={item?.id}
            title={item.name}
            isExpand={item?.isExpand}
            setExpand={setExpandItems}
          >
            <div className="itemWidget">
              <div className="item">
                <div className="imgItem">
                  <img className="img" src={item?.img} alt="#" />
                </div>
                <div className="titleItem">Răng trám lâu ngày bị nhức – hiểu đúng nguyên nhân!</div>
              </div>
            </div>
          </ExpandCard>
        );
      })}
      <ButtonViewDetails title="Xem thêm bài viết" />
    </div>
  );
};
export default ItemView;
