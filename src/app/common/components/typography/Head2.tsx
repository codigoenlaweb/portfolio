export interface Props {
  className?: string;
  title?: string | Array<string | JSX.Element | JSX.Element[]> | JSX.Element|JSX.Element[];
  style?: React.CSSProperties;
}

export const Head2 = ({ title, className, style }: Props) => {
  return (
    <h2 className={`${className}`} style={style}>
      {title}
    </h2>
  );
};
