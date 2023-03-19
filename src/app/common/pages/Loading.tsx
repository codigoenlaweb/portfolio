import logo from "../../../assets/avatar.svg";
import { useEffect, useState } from 'react';
import { animated, useSpring } from "@react-spring/web";

export const Loading = () => {
  const springs = useSpring({
    loop: true,
    from: {
        rotate: 0,
    },
    to: {
        rotate: 360,
    },
    config: { tension: 60, friction: 16},
  });

  useEffect(() => {
    return () => {
      console.log("hola");
    };
  });

  const [show, setShow] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 30000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="z-50 bg-secondary-pressed relative min-h-screen text-typography-dark flex flex-col items-center justify-center">
      <div className="flex relative content-around justify-center">
        <animated.svg
          className="svg-container"
          height="128"
          width="128"
          viewBox="0 0 100 100"
          style={{...springs}}
        >
          <circle
            className="stroke-[8px] stroke-none"
            cx="50"
            cy="50"
            r="45"
          ></circle>
          <circle
            className="absolute top-0 left-0 right-0 bottom-0 fill-secondary-secondary stroke-[5px] stroke-typography-dark"
            style={{ strokeLinecap: "round", strokeDasharray: 141 }}
            cx="50"
            cy="50"
            r="45"
          ></circle>
        </animated.svg>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-32 h-32">
          <img src={logo} alt="loading" className="w-16" />
        </div>
      </div>
    </div>
  );
};


export default Loading