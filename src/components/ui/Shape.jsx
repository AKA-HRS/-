import React from "react";
import "./Shape.css";
import ppngg from "../../assets/ppngg.png";

export function Shape({ children, ani, bg }) {
  return (
    <div className="parent  flex justify-center relative items-center">
      {/* <div
        className={`absolute w-[33%] h-[33%] flex justify-center items-center bg-clip-content ${bg}`}
        style={{
        //   WebkitMaskImage: `url(${ppngg})`,
        //   WebkitMaskRepeat: "no-repeat",
        //   WebkitMaskSize: "contain",
        //   maskImage: `url(${ppngg})`,
        //   maskRepeat: "no-repeat",
        //   maskSize: "contain",
        background:`url(${ppngg})`,
          animation: ani,
        }}
      >
      </div> */}

      <div className="overlay-container">
        <img src={ppngg} alt="Mask" className="overlay-img" />
      </div>
      {children}
    </div>
  );
}
