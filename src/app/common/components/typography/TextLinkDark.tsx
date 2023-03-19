import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
type Textsize = "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl";

interface Props {
  children?: string;
  className?: string;
  style?: CSSProperties;
  size?: Textsize;
  to: string;
  textHelp: string;
}

export const TextLinkDark = ({
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
      className={`text-typography-mid font-montserrat py-1 overflow-hidden inline relative ${className} ${size} overflow-hidden`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={handleClickNav}
    >
      {children}
      <animated.div
        className={`bg-secondary-hover absolute left-0 top-0 h-[70%] w-full opacity-20 rounded-t-sm`}
        style={{ ...springs }}
      />
      <div>
        <animated.div
          className={`bg-secondary-pressed absolute left-0 bottom-0 h-[30%] w-full opacity-20 rounded-b-sm`}
          style={{ ...springs2 }}
        />
      </div>
    </button>
  );
};
