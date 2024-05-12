declare namespace Components {
  namespace RichText {
    interface RichTextRef {
      setValue: (value: string) => void;
      setEmpty: () => void;
      getValue: () => string;
      isEmpty: () => boolean;
    }
  }
}
