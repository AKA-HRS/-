import React from "react";
import { useNavigateTo } from "../context/NavContext";

export function Button({ title, path }) {
  const { setNav, nav } = useNavigateTo();
  const handleClick = () => {
    setNav(path);
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        nav === path
          ? "before:content-[''] before:absolute before:left-0 before:top-0 before:h-1 before:rounded-3xl before:bg-white before:animate-growWidth"
          : "before:content-[''] before:absolute before:left-0 before:top-0 before:h-1 before:rounded-3xl before:bg-white before:animate-nowidth"
      } w-full flex h-full justify-center items-center`}
    >
      {title}
    </button>
  );
}
