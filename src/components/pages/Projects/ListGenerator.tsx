"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import TextGenerator from "./TextGenerator";
import MotionBtn from "../../shared/MotionBtn";

export default function ListGenerator({
  list,
  buttonText,
}: {
  list: string[];
  buttonText: string;
}) {
  const [mockList, setMockList] = useState<string[]>([]);
  const [isList, setIslist] = useState(false);

  const getListHandler = () => {
    setIslist(true);
  };

  useEffect(() => {
    if (isList) {
      list.forEach((el, index) => {
        setTimeout(() => {
          setMockList((prev) => [...prev, el]);
        }, 350 * index);
      });
    }

    return () => {
      setMockList([]);
    };
  }, [isList, list]);

  return (
    <>
      {!isList && (
        <MotionBtn
          className="text-center my-4 mx-auto"
          onClick={getListHandler}
        >
          {buttonText}
        </MotionBtn>
      )}
      <ul className="my-4">
        {isList && (
          <>
            <h6 className="mb-1 text-left text-secondary-color">
              Technologie:
            </h6>
            {mockList.map((el, index) => (
              <li key={el + index}>
                <TextGenerator text={el} immediately={true} />
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}
