"use client";

import MotionHeading from "../common/MotionHeading";
import { WHO_AM_I_TEXT, WHO_AM_I_TEXT_EXPANDED } from "@/lib/contents";
import { useState } from "react";
import { motion } from "framer-motion";
import MotionBtn from "../common/MotionBtn";

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
      <strong key={idx * Math.floor(Math.random() * 100)}>{chunk}</strong>
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
    <>
      <section className="about__whoiam">
        <MotionHeading
          className="about__whoiam--title"
          variant={aboutMeVariants}
          initial={"hidden"}
          animate={"visible"}
        >
          Kim jestem?
        </MotionHeading>
        <MotionBtn
          onClick={switchTextHandler}
          className="transite-colors"
          variant={aboutMeVariants}
          initial={"hidden"}
          animate={"visible"}
        >
          {isExpanded ? "Skróć opis" : "Rozwiń opis"}
        </MotionBtn>
        <div className="about__whoiam--textwrapper">
          <motion.div
            variants={aboutMeVariants}
            initial={"hidden"}
            animate={"visible"}
            key={isExpanded ? "random 1" : "random 2"}
          >
            {mainText.map((text, index) => (
              <p key={index} className="about__whoiam--text">
                {colorizeTextByEqualSign(text)}
              </p>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
