export interface MobileHeaderProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  open?: boolean;
  onClose?: () => void;
  openMenu?: () => void;
}
