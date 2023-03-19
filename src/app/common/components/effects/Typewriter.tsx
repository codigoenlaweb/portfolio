import { useEffect, useState } from "react";
interface Props {
  children?:
    | string
    | Array<string | JSX.Element | JSX.Element[]>
    | JSX.Element
    | JSX.Element[];
}

export const Typewriter = ({ children }: Props) => {
  const [text, setText] = useState<string>("");
  console.log(children);

  useEffect(() => {
    let first_text: string = "";
    switch (typeof children) {
      case "string":
        first_text = children;
        break;
      case "string":
        first_text = children;
        break;

      case "string":
        first_text = children;
        break;

      default:
        break;
    }

    const timeout = setTimeout(() => {
      setText(first_text.slice(0, text.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text]);

  return <div>{text}</div>;
};
