"use client";
import { useState } from "react";

export const useLocalStorage = (key: string) => {
  let item;
  if (localStorage) {
    item = localStorage.getItem(key);
  } else {
    item = "light";
  }
  const [value, setValue] = useState(item);

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return [value, setLocalStorageValue] as const;
};
