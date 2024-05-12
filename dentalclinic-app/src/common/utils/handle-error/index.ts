import { ErrorCode } from '../../services/axios-instance/useErrorCode';
import matchErrorMessage from './matchErrorMess';
import { useOpenErrorModal } from './useOpenErrorModal';
import { useNavigate } from 'react-router';

export interface HandleResult {
  confirmState?: boolean;
  errorCode?: ErrorCode;
  errorMessage?: string;
}

export const useErrorHandler = () => {
  const { openAlert } = useOpenErrorModal();
  const navigate = useNavigate();
  const handleError = (error: A, isShowCommonError = true): Promise<HandleResult> => {
    return new Promise((res) => {
      const { content, routerPush, routerReplace, notAlert, errorCode } = matchErrorMessage(error, isShowCommonError);
      const customResult: HandleResult = {
        errorCode,
        errorMessage: content as string
      };
      const processAction = async () => {
        if (routerPush) {
          navigate(routerPush);
        }
        if (routerReplace) {
          navigate(routerReplace, { replace: true });
        }
      };
      if (notAlert) {
        processAction().then(() => {
          res(customResult);
        });
      } else {
        openAlert({
          content,
          onCancel: () => {
            res({ ...customResult, confirmState: false });
          },
          onOk: () => {
            processAction().then(() => {
              res({ ...customResult, confirmState: true });
            });
          }
        });
      }
    });
  };
  return {
    handleError
  };
};
