import { RenderLeafProps } from 'slate-react';
import { FONT_SIZE } from '../../RichText.utils';

const LeafFormator = ({ attributes, children, leaf }: RenderLeafProps) => {
  const defaultFontSizeKey = Object.keys(FONT_SIZE)[0];
  const style = {
    fontSize: leaf.fontSize
      ? FONT_SIZE[leaf.fontSize as keyof typeof FONT_SIZE]
      : FONT_SIZE[defaultFontSizeKey as keyof typeof FONT_SIZE],
    color: leaf.color
  };
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.strikethrough) {
    children = <s>{children}</s>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return (
    <span {...attributes} style={style}>
      {children}
    </span>
  );
};
export default LeafFormator;
