"use client";
import { useState } from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(localStorage?.getItem(key) ?? "");

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  return [value, setLocalStorageValue] as const;
};
