import React, { useState } from "react";
import home from "../../assets/navicon/home.svg";
import timing from "../../assets/navicon/timing.svg";
import about from "../../assets/navicon/about.svg";
import courses from "../../assets/navicon/courses.svg";
import { useNavigateTo } from "../context/NavContext";

const navItems = [
  {
    name: "Home",
    icon: home,
    path: "/",
    dis: "translate-x-0",
    left: "left-1",
  },
  {
    name: "About",
    icon: about,
    path: "/about",
    dis: "translate-x-14",
    left: "left-0",
  },
  {
    name: "Timing",
    icon: timing,
    path: "/timing",
    dis: "translate-x-28",
    left: "left-0",
  },
  {
    name: "Courses",
    icon: courses,
    path: "/courses",
    dis: "translate-x-44",
    left: "-left-1",
  },
];

export const SmallScreenNav = () => {
  const { setNav, nav } = useNavigateTo();
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white h-[4rem] px-6 rounded-t-xl">
      <div className="relative">
        <ul className="flex items-center justify-between sm:justify-start sm:space-x-4 space-x-2">
          <span
            className={`
              bg-purple-200 duration-500 
              ${navItems[active].dis} 
              border-4 
              ${navItems[active].left} border-purple-100 h-12 w-12 absolute -top-5 rounded-full 
              before:content-[''] before:absolute before:top-[40%] before:rounded-tr-[20px]  before:bg-transparent before:w-5 before:h-5 before:-left-[20px] before:shadow-[0px_-10px_0_rgb(243,232,255)] 
              after:content-[''] after:absolute after:top-[40%] after:rounded-tl-[20px]  after:bg-transparent after:w-5 after:h-5 after:-right-[20px] after:shadow-[0px_-10px_0_rgb(243,232,255)]
              `}
          ></span>
          {navItems.map((menu, i) => (
            <li key={i} className="flex-1 text-center sm:w-16">
              <button
                className="flex flex-col items-center pt-6"
                onClick={() => {
                  setNav(menu.path);
                  setActive(i);
                }}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active ? "-mt-8 text-white z-50":""
                  }`}
                >
                  <img src={menu.icon} className={`${i === active ?"-mt-6":""} w-6 h-6 text-white transition-all duration-500`} alt="" />
                </span>
                <span
                  className={`transition-transform duration-700 ${
                    active === i
                      ? "translate-y-4 opacity-100"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {menu.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
