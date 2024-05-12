import ButtonViewDetails from '@/common/components/button-view-details/ButtonViewDetails';
import { ItemViewProps } from './ItemVIew.model';
import styles from './ItemView.module.scss';

const ItemView = (props: ItemViewProps) => {
  const { itemData, className, isButtonNavigate, isHasButton, onClick, onNavigate } = props;

  return (
    <div className={className ? className : styles.itemView}>
      {itemData.map((item: A) => {
        return (
          <div key={item?.id} className="itemWidget">
            <div className="item">
              <div className="imgItem">
                <img className="img" src={item?.img} alt="#" />
              </div>
              <div className="item-content">
                <h3 className="titleItem">Răng trám lâu ngày bị nhức – hiểu đúng nguyên nhân!</h3>
                {item?.descreption && (
                  <div className="item-descreption">Bị mất răng R6 hàm trên và dưới có niềng được không?</div>
                )}
                {isHasButton && <ButtonViewDetails onClick={onClick} />}
              </div>
            </div>
          </div>
        );
      })}
      {isButtonNavigate && <ButtonViewDetails onClick={onNavigate} title="Xem thêm bài viết" />}
    </div>
  );
};
export default ItemView;
