import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav, SmallScreenNav } from "./components/ui";
import { throttle } from "lodash";

export default function Layout() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;
      setIsBottom((prevIsBottom) => {
        if (prevIsBottom !== isAtBottom) {
          return isAtBottom;
        }
        return prevIsBottom;
      });
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen h-screen relative flex overflow-hidden flex-col font-sans bg-purple-100">
      <div className="hidden w-2/3 h-16 md:flex px-5 bg-gradient-to-r from-purple-600 to-purple-500 right-0 top-8 rounded-l-3xl absolute z-50 opacity-10 hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 ease-in-out delay-100">
        <Nav />
      </div>

      <Outlet />
      <div
        className={`$ bottom-10 fixed left-0 right-0 mx-auto
           max-md:flex hidden overflow-hidden justify-center w-[64%] z-50 place-items-end h-24 bg-purple-100 rounded-lg hover:opacity-100 opacity-75`}
      >
        <SmallScreenNav />
      </div>
    </div>
  );
}
