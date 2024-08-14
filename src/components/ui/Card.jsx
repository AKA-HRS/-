import React from "react";
import { GlassButton } from "./GlassButton";

export function Card({ title, desc, teach, dur, video, link }) {
  

  return (
    <div className="w-72 text-white max-md:w-96 h-96 shadow-xl shadow-purple-300 bg-black flex flex-col overflow-hidden rounded-xl">
      <div className="flex-1 flex justify-center items-center">
        <iframe
          className="w-full h-full"
          encrypted-media
          allowFullScreen
          src={video}
        ></iframe>
      </div>

      <div className="h-20 w-full group pl-3 hover:pl-3 p-2 hover:p-2 relative rounded-tl-[30px] hover:h-52 transition-all duration-500 ease-in-out bg-purple-500 after:content-[''] after:w-[100px] after:h-[40px] after:bg-transparent after:absolute after:-top-[40px] after:right-[1px] after:z-0 after:rounded-br-full after:rounded:tr-[50px] after:shadow-[60px_2px_0px_2px_rgb(168,85,247)]">
        <h1 className="uppercase text-sm font-bold">{title}</h1>

        <GlassButton name={"Enroll now"} title={title} />

        <h2>{teach}</h2>
        <h3 className="font-bold">{dur}</h3>
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
