import { Editor as SlateEditor, Transforms, Element as SlateElement } from 'slate';

export const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+s': 'strikethrough'
};

export const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];

export const FONT_SIZE = {
  font14: '14px',
  font16: '16px',
  font18: '18px',
  font20: '20px',
  font24: '24px',
  font28: '28px',
  font32: '32px'
} as const;

export const checkFormat = (format: string) => {
  if (TEXT_ALIGN_TYPES.includes(format)) {
    return 'align';
  } else {
    return 'type';
  }
};

export const toggleBlock = (editor: SlateEditor, format: string) => {
  const isActive = isBlockActive(editor, format, checkFormat(format));
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !SlateEditor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true
  });
  let newProperties: A;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format
    };
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block: A = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const toggleMark = (editor: SlateEditor, format: string, value: A = true) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    SlateEditor.removeMark(editor, format);
  } else {
    SlateEditor.addMark(editor, format, value);
  }
};

export const isBlockActive = (editor: SlateEditor, format: string, blockType = 'type') => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: (n) => !SlateEditor.isEditor(n) && SlateElement.isElement(n) && n[blockType as keyof typeof n] === format
    })
  );

  return !!match;
};

export const isMarkActive = (editor: SlateEditor, format: string) => {
  const marks = SlateEditor.marks(editor);
  return marks ? marks[format as keyof typeof marks] === true : false;
};

export const isMarkFontSizeActive = (editor: SlateEditor, formatValue: string) => {
  const marks = SlateEditor.marks(editor);
  if (marks && marks?.fontSize) {
    return marks?.fontSize === formatValue;
  }
  return false;
};
