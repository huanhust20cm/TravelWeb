import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BoldOutlined,
  ItalicOutlined,
  MenuOutlined,
  OrderedListOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Space } from 'antd';
import isHotkey from 'is-hotkey';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Element as SlateElement, Transforms, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, ReactEditor, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { IRichTextProps } from './RichText.model';
import styles from './RichText.module.scss';
import { HOTKEYS, toggleMark } from './RichText.utils';
import BlockButton from './components/block-button/BlockButton';
import BlockSelect from './components/block-select/BlockSelect';
import ElementFormator from './components/element-formator/ElementFomator';
import LeafFormator from './components/leaf-fomator/LeafFomator';
import MarkButton from './components/mark-button/MarkButton';

const RichText = forwardRef<Components.RichText.RichTextRef, IRichTextProps>((props, ref) => {
  const renderElement = useCallback((renderProps: RenderElementProps) => <ElementFormator {...renderProps} />, []);
  const renderLeaf = useCallback((renderProps: RenderLeafProps) => <LeafFormator {...renderProps} />, []);
  const editorRef = useRef<ReactEditor>();
  const [reRender, setRender] = useState<boolean>(false);
  if (!editorRef.current) {
    editorRef.current = withHistory(withReact(createEditor()));
  }

  const editor = editorRef.current;
  const theKey = ['children', 'fontSize', 'type', 'text', 'italic', 'strikethrough', 'underline', 'bold', 'align'];
  const filterAndReplaceHTML = (data: A): A => {
    if (data && typeof data === 'object') {
      if (Array.isArray(data)) {
        return data.map((item) => filterAndReplaceHTML(item));
      } else {
        return Object.fromEntries(
          Object.entries(data).map(([k, v]) => {
            let tempKey = k;
            if (k === 'html') {
              tempKey = 'text';
            }
            if (!theKey.includes(tempKey)) {
              return ['text', ''];
            }
            return [tempKey, filterAndReplaceHTML(v)];
          })
        );
      }
    }
    return data;
  };

  useImperativeHandle(ref, () => {
    return {
      setValue: (str: string) => {
        if (editor.children && str) {
          Transforms.deselect(editor);
          try {
            const tempChildObject = JSON.parse(str);

            if (Number.isFinite(tempChildObject)) {
              throw new Error('tempChildObject is not a Descendant array');
            }

            editor.children = filterAndReplaceHTML(tempChildObject);
          } catch (e) {
            editor.children = [
              {
                type: 'paragraph',
                align: 'left',
                children: [{ text: str }]
              }
            ];
          }
          setRender(!reRender);
        }
      },
      setEmpty: () => {
        if (editor.children) {
          Transforms.deselect(editor);
          editor.children = [
            {
              type: 'paragraph',
              align: 'left',
              children: [{ text: '' }]
            }
          ];
          setRender(!reRender);
        }
      },
      getValue: () => {
        return editor.children ? JSON.stringify(editor.children) : '';
      },
      isEmpty: () => {
        if (editor.children?.length === 0) return true;
        return editor.children.every((item) => editor.isEmpty(item as SlateElement));
      }
    };
  });

  const onEditorBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      props.onBlur?.(e);
    }
  };

  const onEditorFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      props.onFocus?.(e);
    }
  };

  return (
    <Slate
      onChange={props.onEditorChange}
      editor={editor}
      initialValue={[
        {
          type: 'paragraph',
          align: 'left',
          children: [{ text: '' }]
        }
      ]}
    >
      <div
        className={`${styles.dtRichText} ${props.isViewMode ? 'is-view' : ''} ${props.className}`}
        data-render={reRender}
        onBlur={onEditorBlur}
        onFocus={onEditorFocus}
      >
        {!props.isViewMode && (
          <div className="button-toolbar">
            <Space wrap>
              <div className="button-group">
                <MarkButton format="bold" icon={<BoldOutlined />} />
                <MarkButton format="italic" icon={<ItalicOutlined />} />
                <MarkButton format="underline" icon={<UnderlineOutlined />} />
                <MarkButton format="strikethrough" icon={<StrikethroughOutlined />} />
              </div>
              <div className="button-group">
                <BlockButton format="left" icon={<AlignLeftOutlined />} />
                <BlockButton format="center" icon={<AlignCenterOutlined />} />
                <BlockButton format="right" icon={<AlignRightOutlined />} />
                <BlockButton format="justify" icon={<MenuOutlined />} />
              </div>
              <div className="button-group">
                <BlockButton format="numbered-list" icon={<OrderedListOutlined />} />
                <BlockButton format="bulleted-list" icon={<UnorderedListOutlined />} />
              </div>
              <div>
                <BlockSelect></BlockSelect>
              </div>
            </Space>
          </div>
        )}
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          className={`rich-content dt-scrollbar`}
          spellCheck
          readOnly={props.isViewMode ?? false}
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as A)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
                if (mark) {
                  toggleMark(editor, mark);
                }
              }
            }
          }}
        />
      </div>
    </Slate>
  );
});
RichText.displayName = 'RichText';
export default RichText;
