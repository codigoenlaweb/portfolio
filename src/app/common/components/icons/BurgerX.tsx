import { animated, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export const BurgerX = ({ setOpenMenu }: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAlgo, setIsAlgo] = useState<boolean>(true);

  useEffect(() => {
    if (!isOpen) {
      setIsShown(false);
      setTimeout(() => {
        setIsAlgo((element) => !element);
      }, 500);
    } else {
      setIsAlgo((element) => !element);
    }
  }, [isOpen]);

  const springs = useSpring({
    gap: isShown ? "14px" : "8px",
    y: isShown ? "-2px" : "0px",
    config: { tension: 180, friction: 16 },
  });

  const springs2 = useSpring({
    gap: isOpen ? "0px" : "8px",
    y: isOpen ? "0px" : "0px",
  });

  const springs3 = useSpring({
    y: isOpen ? "3px" : "0px",
    rotate: isOpen ? (isShown ? 235 : 225) : 0,
  });

  const springs4 = useSpring({
    rotate: isOpen ? (isShown ? 235 : 225) : 0,
  });

  const springs5 = useSpring({
    y: isOpen ? "-3px" : "0px",
    rotate: isOpen ? (isShown ? 305 : 315) : 0,
  });

  const initSprings1 = useSpring({
    from: {
      x: 200
    },
    to: {
      x: 0
    },
    delay: 250
  });

  const initSprings2 = useSpring({
    from: {
      x: 200
    },
    to: {
      x: 0
    },
    delay: 350
  });

  const initSprings3 = useSpring({
    from: {
      x: 200
    },
    to: {
      x: 0
    },
    delay: 450
  });

  const handleClick = () => {
    setIsOpen((element) => !element);
    setOpenMenu((element) => !element);
  };

  return (
    <animated.button
      className="absolute top-8 right-8 sm:right-16 z-30 grid grid-cols-1 grid-rows-1 gap-2 py-5 gap-y-2 overflow-x-hidden"
      onClick={handleClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      style={isAlgo ? { ...springs2 } : { ...springs }}
      //   style={!isOpen? { ...springs }: { ...springs2 }}
    >
      <animated.i
        className="bg-typography-mid w-10 h-[3px] block rounded-md"
        style={{ ...springs3, ...initSprings1 }}
      ></animated.i>
      <animated.i
        className="bg-typography-mid w-10 h-[3px] block rounded-md"
        style={{ ...springs4, ...initSprings2 }}
      ></animated.i>
      <animated.i
        className="bg-typography-mid w-10 h-[3px] block rounded-md"
        style={{ ...springs5, ...initSprings3 }}
      ></animated.i>
    </animated.button>
  );
};
