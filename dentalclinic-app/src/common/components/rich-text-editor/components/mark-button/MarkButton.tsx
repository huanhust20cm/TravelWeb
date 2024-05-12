import { useSlate } from 'slate-react';
import { isMarkActive, toggleMark } from '../../RichText.utils';

interface IProps {
  format: A;
  icon?: React.ReactNode;
}

const MarkButton = (props: IProps) => {
  const editor = useSlate();
  const { format, icon } = props;
  return (
    <button
      className={`dt-rich-btn ${isMarkActive(editor, format) ? 'is-active' : ''}`}
      onMouseDown={(event: A) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
      type="button"
    >
      {icon}
    </button>
  );
};

export default MarkButton;
