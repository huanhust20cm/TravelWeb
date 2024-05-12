import { Tooltip } from 'antd';
import { BlockProps } from 'antd/es/typography/Base';
import Paragraph from 'antd/es/typography/Paragraph';
import React, { useState } from 'react';
import style from './Tooltip.module.scss';

interface ITooltipParagraph extends BlockProps {
  rows?: number;
  className?: string;
}
const TooltipParagraph: React.FC<ITooltipParagraph> = ({ children, ...other }) => {
  const [truncated, setTruncated] = useState(false);
  const { ellipsis, rows, className, ...props } = other as ITooltipParagraph;

  return (
    <Tooltip
      title={truncated ? <div className={style.customTooltip}>{children}</div> : undefined}
      color="#ffffff"
      arrow={true}
      rootClassName={style.toolTip}
      placement="top"
    >
      <Paragraph
        {...props}
        ellipsis={
          typeof ellipsis === 'boolean' ? ellipsis : { ...ellipsis, onEllipsis: setTruncated, expandable: false, rows }
        }
        className={`${className} ${style.paragraph}`}
      >
        <>{children}</>
      </Paragraph>
    </Tooltip>
  );
};

export default TooltipParagraph;
