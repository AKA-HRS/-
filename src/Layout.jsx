import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/ui";

export default function Layout() {
  return (
    <div className="w-screen h-screen relative flex overflow-hidden font-sans bg-purple-100">
        <div className="hidden w-2/3 h-16 md:flex px-5 bg-gradient-to-r from-purple-600 to-purple-500 right-0 top-8 rounded-l-3xl absolute z-50 opacity-10 hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 ease-in-out delay-100">
            <Nav/>
        </div>
      <Outlet />
    </div>
  );
}
