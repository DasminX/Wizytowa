"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";

export default function TextGenerator({
  text,
  immadietaly = false,
}: {
  text: string;
  immadietaly?: boolean;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isText, setIsText] = useState(immadietaly);

  const getTextHandler = () => {
    setIsText(true);
  };

  useEffect(() => {
    const textRefCopy = textRef.current;
    if (isText && textRef.current?.innerHTML === "") {
      {
        text.split("").forEach((char, index) => {
          setTimeout(() => {
            textRef.current!.innerHTML += char;
          }, 50 * index);
        });
      }
    }

    return () => {
      textRefCopy!.innerHTML = "";
    };
  }, [isText, text]);
  return (
    <div>
      {!isText && (
        <button onClick={getTextHandler}>
          Zaciekawiony? Wygeneruj opis...
        </button>
      )}
      {isText && <p ref={textRef}></p>}
    </div>
  );
}
