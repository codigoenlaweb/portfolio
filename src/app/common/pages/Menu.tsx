import { TextLinkDark } from "../../common/components/typography";
import { animated, useSpring } from "@react-spring/web";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
}

export const Menu = ({ open }: Props) => {
  const [isVisible, setisVisible] = useState(false);

  const springs = useSpring({
    y: open ? "0%" : "-100%",
    config: { tension: 180, friction: 18 },
  });

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setisVisible(false);
      }, 350);
    } else {
      setisVisible(true);
    }
  }, [open]);

  return (
    <div
      className={`z-10 h-screen absolute top-0 left-0 w-full bg-transparent overflow-hidden flex-wrap ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <animated.div
        className="bg-secondary-secondary h-screen flex justify-center items-center flex-col w-full"
        style={{ ...springs }}
      >
        <div className="bg-secondary-focus bg-opacity-30 flex flex-col rounded-md">
        <TextLinkDark
            to="/"
            textHelp="Home"
            size="text-4xl"
            className="py-8 px-56"
          >
            Home
          </TextLinkDark>
          <TextLinkDark
            to="/about"
            textHelp="About"
            size="text-4xl"
            className="py-8 px-56"
          >
            About
          </TextLinkDark>
          <TextLinkDark
            to="/portfolio"
            textHelp="Portfolio"
            size="text-4xl"
            className="py-8 px-56"
          >
            Portfolio
          </TextLinkDark>
          <TextLinkDark
            to="/contact"
            textHelp="Contact"
            size="text-4xl"
            className="py-8 px-56"
          >
            contact
          </TextLinkDark>
        </div>
      </animated.div>
    </div>
  );
};
