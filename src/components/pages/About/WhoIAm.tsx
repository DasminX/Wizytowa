"use client";

import MotionHeading from "../../shared/MotionHeading";
import { WHO_AM_I_TEXT, WHO_AM_I_TEXT_EXPANDED } from "@/lib/contents";
import { useState } from "react";
import { motion } from "framer-motion";
import MotionBtn from "@/components/shared/MotionBtn";

const aboutMeVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

const colorizeTextByEqualSign = (text: string) => {
  return text.split("=").map((chunk, idx) => {
    return idx % 2 === 0 ? (
      chunk
    ) : (
      <strong className="text-secondary-color" key={idx}>
        {chunk}
      </strong>
    );
  });
};

export function WhoIAm() {
  const [isExpanded, setIsExpanded] = useState(false);

  const switchTextHandler = () => {
    setIsExpanded((prev) => !prev);
  };

  const mainText = isExpanded ? WHO_AM_I_TEXT_EXPANDED : WHO_AM_I_TEXT;

  return (
    <section className="relative flex flex-col max-w-7xl w-10/12 mx-auto">
      <MotionHeading
        className="text-center"
        variant={aboutMeVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        Kim jestem?
      </MotionHeading>
      <MotionBtn
        onClick={switchTextHandler}
        variant={aboutMeVariants}
        initial={"hidden"}
        animate={"visible"}
      >
        {isExpanded ? "Skróć opis" : "Rozwiń opis"}
      </MotionBtn>
      <div className="my-4 mx-auto">
        <motion.div
          variants={aboutMeVariants}
          initial={"hidden"}
          animate={"visible"}
          key={isExpanded ? "random 1" : "random 2"}
        >
          {mainText.map((text, index) => (
            <p key={index} className="leading-7 mb-4 font-bold">
              {colorizeTextByEqualSign(text)}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
