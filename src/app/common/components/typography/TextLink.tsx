import { CSSProperties, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
type Textsize = "text-sm" | "text-base" | "text-lg";

interface Props {
  children?: string;
  className?: string;
  style?: CSSProperties;
  size?: Textsize;
  to: string;
  textHelp: string;
}

export const TextLink = ({
  children,
  className,
  style,
  size,
  to,
  textHelp,
}: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const springs = useSpring({ x: isShown ? "0%" : "-110%" });

  const springs2 = useSpring({ x: isShown ? "0%" : "110%" });
  const navigate = useNavigate();

  const handleClickNav = () => {
    navigate(to);
  };

  return (
    <button
      title={textHelp}
      className={`text-typography-mid font-montserrat ${className} ${size} overflow-hidden relative leading-normal`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={handleClickNav}
    >
      {children}
      <animated.div
        className={`bg-typography-ligh absolute left-0 top-0 h-[70%] w-full opacity-20 rounded-t-sm`}
        style={{ ...springs }}
      />
      <div>
        <animated.div
          className={`bg-typography-ligh absolute left-0 bottom-0 h-[30%] w-full opacity-20 rounded-b-sm`}
          style={{ ...springs2 }}
        />
      </div>
    </button>
  );
};
