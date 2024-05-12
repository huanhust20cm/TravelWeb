import { CaretDownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { useSlate } from 'slate-react';
import { FONT_SIZE, isMarkFontSizeActive, toggleMark } from '../../RichText.utils';

const BlockSelect = () => {
  const editor = useSlate();
  const [value, setValue] = useState<string>(Object.keys(FONT_SIZE)[0]);

  useEffect(() => {
    let defaultValue = Object.keys(FONT_SIZE)[0];

    Object.keys(FONT_SIZE).forEach((itemKey) => {
      if (isMarkFontSizeActive(editor, itemKey)) {
        defaultValue = itemKey;
      }
    });

    if (defaultValue !== value) {
      setValue(defaultValue);
    }
  });

  return (
    <Select
      suffixIcon={<CaretDownOutlined />}
      value={value}
      className={`dt-rich-select`}
      options={Object.entries(FONT_SIZE).map(([k, v]) => ({ label: v, value: k }))}
      onChange={(value) => {
        setValue(value);
        toggleMark(editor, 'fontSize', value);
      }}
    ></Select>
  );
};

export default BlockSelect;
