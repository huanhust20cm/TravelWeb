import { Descendant } from 'slate';

export interface IRichTextProps {
  isViewMode?: boolean;
  onEditorChange?: (value: Descendant[]) => void;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  className?: string;
}
