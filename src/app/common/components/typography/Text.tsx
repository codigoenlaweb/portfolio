import { CSSProperties } from "react";

type Textsize = "text-sm" | "text-base" | "text-lg";

interface Props {
  children?:
    | string
    | Array<string | JSX.Element | JSX.Element[]>
    | JSX.Element
    | JSX.Element[];
  className?: string;
  style?: CSSProperties;
  size?: Textsize;
}

export const Text = ({ children, className, style, size }: Props) => {
  return (
    <>
      <p className={`text-typography-dark ${className} ${size}`} style={style}>
        {children}
      </p>
    </>
  );
};
