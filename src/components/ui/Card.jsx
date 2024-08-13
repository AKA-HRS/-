import React from "react";

export function Card({ title, desc, teach, dur, link }) {
  return (
    <div className="w-72 text-white max-md:w-96 h-96 shadow-xl shadow-purple-300 bg-white flex flex-col overflow-hidden rounded-xl">
      <div className="flex-1 flex justify-center items-center">
        jsdljfsaldfsal
      </div>

      <div className="h-20 w-full group pl-3 pb-5 hover:pl-3 p-2 hover:p-2 relative rounded-tl-[30px] hover:h-48 transition-all duration-500 ease-in-out bg-purple-500 after:content-[''] after:w-[100px] after:h-[40px] after:bg-transparent after:absolute after:-top-[40px] after:right-[1px] after:z-0 after:rounded-br-full after:rounded:tr-[50px] after:shadow-[60px_2px_0px_2px_rgb(168,85,247)]">
        <h1 className="uppercase">{title}</h1>
        <h2>{teach}</h2>
        <h3>{dur}</h3>
        <p className=" transition-all duration-500 opacity-0 group-hover:flex group-hover:opacity-100">
          {desc}
        </p>
        <a
          href={link}
          className="text-black hover:text-purple-700 transition-all duration-500"
        >
          More Details
        </a>
      </div>
    </div>
  );
}
