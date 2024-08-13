import React from "react";
import { Card } from "../ui";
import data from "../../assets/data.json";

export function Courses() {
  return (
    <div className="w-full h-full flex flex-wrap gap-5 justify-center p-5 max-md:gap-x-1.5 max-md:gap-y-5  overflow-y-scroll">
      {data.map((d, i) => (
        <Card
        key={i}
          title={d["Course Title"]}
          desc={d["Short Description"]}
          teach={d["Instructor Name"]}
          dur={d["Course Duration"]}
          link={d["View More"]}
        />
      ))}
    </div>
  );
}
