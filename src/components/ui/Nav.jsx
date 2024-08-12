import React from "react";
import { Button } from "./Button";
import { SearchBar } from "./SearchBar";

const btns = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Timing",
    path: "/timing",
  },
  {
    title: "Courses",
    path: "/courses",
  },
];
export function Nav() {
  return (
    <div className="w-full h-full flex relative justify-center items-center text-white">
      <div className="flex-[2] flex space-x-24 h-full justify-center items-center ">
        {btns.map((btn, index) => (
          <div className="relative h-full w-24 font-bold" key={index}>
            <Button title={btn.title} path={btn.path} />
          </div>
        ))}
      </div>
      <div className="h-full mx-5 flex justify-center items-center flex-1">
        <SearchBar />
      </div>
    </div>
  );
}
