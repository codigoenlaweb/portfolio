import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

interface Props {
  className?: string;
  direction?: "R" | "L";
  text: string;
}

export const Arrow = ({ className, direction = "L", text }: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const springs1 = useSpring({
    y: isShown ? -12 : -18,
    rotate: direction === "L" ? (isShown ? 330 : 315) : isShown ? 30: 45,
  });

  const springs2 = useSpring({
    rotate: direction === "L" ? (isShown ? 30: 45) : (isShown ? 330 : 315),
  });

  const InitSprings1 = useSpring({
    from:{
      x: direction === "L" ? -200: 200,
    },
    to: {
      x: 0,
    },
    delay: 250
  });

  const springs3 = useSpring({
    y: -24,
    x: direction === "L" ? (isShown ? 40 : -60) : (isShown ? -100 : 10),
    scale: isShown ? 1 : 0.5,
    opacity: isShown ? 1 : 0
  });

  return (
    <div
      className={`absolute ${
        direction === "L" ? "left-0 pl-16 pr-9" : "right-0 pl-[100px]"
      } top-1/3 py-[16vh] ${className} overflow-x-hidden hidden md:block`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <animated.i
        className="bg-typography-mid w-8 h-[3px] block rounded-lg"
        style={{ ...springs1, ...InitSprings1 }}
      ></animated.i>
      <animated.i
        className="bg-typography-mid w-8 h-[3px] block rounded-lg"
        style={{ ...springs2, ...InitSprings1 }}
      ></animated.i>

      <animated.p
        className={`text-typography-mid text-lg font-montserrat w-[92px] ${direction === "L" ? "text-left" : "text-right"}`}
        style={{ ...springs3 }}
      >
        {text}
      </animated.p>
    </div>
  );
};
