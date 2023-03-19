export interface Props {
  className?: string;
  title?: string | Array<string | JSX.Element | JSX.Element[]> | JSX.Element|JSX.Element[];
  style?: React.CSSProperties;
}

export const Head1 = ({ title, className, style }: Props) => {
  return (
    <h1 className={`${className}`} style={style}>
      {title}
    </h1>
  );
};
