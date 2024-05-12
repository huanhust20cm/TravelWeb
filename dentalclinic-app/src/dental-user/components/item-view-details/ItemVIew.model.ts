export interface ItemViewProps {
  className?: string;
  isHasButton: boolean;
  isButtonNavigate: boolean;
  onClick?: () => void;
  itemData: A;
  onNavigate?: () => void;
}
