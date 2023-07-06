"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import TextGenerator from "./TextGenerator";

export default function ListGenerator({ list }: { list: string[] }) {
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
        <button onClick={getListHandler}>
          Zaciekawiony? Wygeneruj liste stack...
        </button>
      )}
      <ul className="generator-list">
        {isList && (
          <>
            <h6 className="technologies-h6">Technologie:</h6>
            {mockList.map((el, index) => (
              <li key={el + index}>
                <TextGenerator text={el} immadietaly={true} />
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}
