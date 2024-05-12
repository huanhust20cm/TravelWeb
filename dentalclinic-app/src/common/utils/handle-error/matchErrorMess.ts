import { ModalFuncProps } from 'antd';
import { ErrorCode } from '../../services/axios-instance/useErrorCode';
interface IMatchResultModalOptions extends ModalFuncProps {
  signOut?: boolean;
  closeAreYouSure?: boolean;
  routerReplace?: string;
  routerPush?: string;
  notAlert?: boolean;
  errorCode?: ErrorCode;
}
const matchErrorMessage = (error: A, isShowCommonError = true): IMatchResultModalOptions => {
  const result: IMatchResultModalOptions = {};
  if (error instanceof DOMException) {
    result.content = String(error);
    return result;
  }
  if (!error || typeof error !== 'object' || error?.type !== 'request') {
    result.content = error;
    return result;
  }
  if (!isShowCommonError) {
    result.content = error?.message;
    return result;
  }

  // Common error match.
  result.errorCode = error?.code;
  const defaultErrorMessage = `System error. Error code: ${error?.correlatedId}`;
  switch (error.code) {
    case ErrorCode.CookieIsExpired:
    case ErrorCode.CookieIsDiscarded:
      result.content = `Your session has been timed out.`;
      result.signOut = true;
      result.routerReplace = `/logout`;
      break;
    case ErrorCode.RepeatedLogin:
      result.notAlert = true;
      result.signOut = true;
      result.routerReplace = `/logout?_t=r`;
      break;

    case ErrorCode.NotExist:
      result.notAlert = true;
      result.closeAreYouSure = true;
      result.routerReplace = '/404';
      break;
    case ErrorCode.FrontendTimeOUt:
      result.content = `System error, please try again later.`;
      break;
    default:
      if (error?.code !== ErrorCode.Unknow) {
        result.content = `${defaultErrorMessage}. EventId: ${error?.code}.`;
      } else {
        result.content = defaultErrorMessage;
      }
      break;
  }
  return result;
};
export default matchErrorMessage;
