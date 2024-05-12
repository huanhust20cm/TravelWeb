/// <reference types="vite/client" />

declare type A = any;
declare type Guid = string;
declare type DateTime = string;
declare type ClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
type Base64Stream = ReadableStream<Buffer>;

declare interface SelectOption<T = string> {
  label?: string;
  value?: T;
}
