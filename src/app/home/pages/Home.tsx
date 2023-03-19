import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Heading, Text, TextLink } from "../../common/components/typography";
import { BaseTemplate } from "../../common/templates/BaseTemplate";
import avatar from "../../../assets/foto1.png";
import { useSpring, animated } from "@react-spring/web";

export const Home = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(true);
    }, 5400);
  }, []);

  const springs = useSpring({
    from: {
      opacity: 0,
      scale: 1.2,
      x: 50,
      y: -50
    },
    to: {
      opacity: 0.4,
      scale: 1,
      x: 0,
      y: 0
    },
  });

  return (
    <BaseTemplate>
      <animated.img
        style={{ ...springs }}
        src={avatar}
        alt="my foto"
        className="absolute -left-24 bottom-0 md:h-[50vh] lg:h-[70vh] hidden md:block"
      />

      <section className="w-full h-screen flex justify-center items-center flex-col">
        <article className="text-center w-full sm:w-3/4 md:w-2/3">
          <Heading as="h1" size="text-3xl" className="mb-2">
            <Typewriter
              options={{
                delay: 85,
                cursorClassName: "hidden",
              }}
              onInit={(typewriter) => {
                typewriter.typeString("Hello, my name is Jesus Olmos.").start();
              }}
            />
          </Heading>

          <div className={`${isHidden ? "hidden" : ""}`}>
            <Text size="text-lg" className="">
              <Typewriter
                options={{
                  loop: false,
                  delay: 3,
                  cursorClassName: "hidden",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(3400)
                    .typeString(
                      `I am an full-stack web developer Backend specialist. I invite you to look a little more <strong class='text-typography-mid font-montserrat py-1'>about</strong>
                      my profile so that you can get to know me better. Feel free to take a look at my <strong class='text-typography-mid font-montserrat py-1'>latest projects</strong>
                      on the web portfolio page. Available in English and Spanish.
                      <strong class='text-typography-mid font-montserrat py-1'>Contact</strong>`
                    )
                    .start();
                }}
              />
            </Text>
          </div>

          <div className={`${isHidden ? "" : "hidden"}`}>
            <Text size="text-lg">
              I am an full-stack web developer Backend specialist. I invite you
              to look a little more{" "}
              <TextLink to="about" textHelp="About">
                about
              </TextLink>{" "}
              my profile so that you can get to know me better. Feel free to
              take a look at my{" "}
              <TextLink to="about" textHelp="Porfolio">
                latest projects
              </TextLink>{" "}
              on the web portfolio page. Available in English and Spanish.{" "}
              <TextLink to="about" textHelp="Contact">
                Contact
              </TextLink>
            </Text>
          </div>
        </article>
      </section>
    </BaseTemplate>
  );
};
