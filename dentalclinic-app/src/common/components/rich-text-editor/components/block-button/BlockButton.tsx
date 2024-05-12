import { useSlate } from 'slate-react';
import { checkFormat, isBlockActive, toggleBlock } from '../../RichText.utils';

interface IProps {
  format: A;
  icon?: React.ReactNode;
}

const BlockButton = (props: IProps) => {
  const editor = useSlate();
  const { format, icon } = props;
  return (
    <button
      className={`dt-rich-btn ${isBlockActive(editor, format, checkFormat(format)) ? 'is-active' : ''}`}
      onMouseDown={(event: A) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      type="button"
    >
      {icon}
    </button>
  );
};

export default BlockButton;
