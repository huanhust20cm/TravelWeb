import { ExclamationCircleFilled } from '@ant-design/icons';
import { ModalFuncProps } from 'antd';
import { useModal } from '../modal/useModal';

const useOpenErrorModal = () => {
  const { openError } = useModal();
  const forbidCloseModal = {
    keyboard: false,
    maskClosable: false
  };
  const openAlert = (options: ModalFuncProps) => {
    const { title = 'Alert', content, onOk, centered = true } = options;
    openError({
      icon: <ExclamationCircleFilled style={{ color: '#D01B1B' }} />,
      title,
      content,
      ...forbidCloseModal,
      zIndex: 10000,
      centered,
      onOk,
      onCancel: onOk
    });
  };
  return { openAlert };
};
export { useOpenErrorModal };
