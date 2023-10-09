"use client";
import React, { useEffect, useState, useRef } from "react";
import MotionBtn from "../../shared/MotionBtn";

export default function TextGenerator({
  text,
  buttonText,
  immediately = false,
}: {
  text: string;
  buttonText?: string;
  immediately?: boolean;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isText, setIsText] = useState(immediately);

  const getTextHandler = () => {
    setIsText(true);
  };

  useEffect(() => {
    const textRefCopy = textRef.current;
    if (!textRefCopy) return;
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        textRef.current!.innerHTML += text[currentIndex];
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
      if (textRefCopy) {
        textRefCopy.innerHTML = "";
      }
    };
  }, [isText, text]);

  return (
    <>
      {!isText && (
        <MotionBtn
          className="text-center my-4 mx-auto hover:scale-105 duration-300"
          onClick={getTextHandler}
        >
          {buttonText ?? "Przycisk"}
        </MotionBtn>
      )}
      {isText && <p ref={textRef}></p>}
    </>
  );
}
