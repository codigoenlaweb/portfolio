import { Head1 } from "./Head1";
import { Head2 } from "./Head2";
import { Head3 } from "./Head3";

const HeadComponents = {
  h1: Head1,
  h2: Head2,
  h3: Head3,
};

type typeHeads = "h1" | "h2" | "h3";
type Headingsize = "text-lg" | "text-xl" | "text-2xl" | "text-3xl";

export interface Props {
  children?: string | Array<string | JSX.Element | JSX.Element[]> | JSX.Element|JSX.Element[];
  className?: string;
  style?: React.CSSProperties;
  as?: typeHeads;
  size?: Headingsize;
}

export const Heading = ({ children, className, style, size="text-xl", as = "h2" }: Props) => {
  const HeadComponent = HeadComponents[as];

  return <HeadComponent title={children} className={`font-montserrat text-typography-ligh ${className} ${size}`} style={style} />;
};1
