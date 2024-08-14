import React from "react";
import { Card, Form } from "../ui";
import data from "../../assets/data.json";
import { useNavigateTo } from "../context/NavContext";

export function Courses() {
  const { nav } = useNavigateTo();
  return (
    <div className="w-full relative h-full flex flex-wrap gap-5 justify-center p-5 max-md:gap-x-1.5 max-md:gap-y-5  overflow-y-scroll">
      {nav === "/courses" && data.map((d, i) => (
        <Card
          key={i}
          title={d["Course Title"]}
          desc={d["Short Description"]}
          teach={d["Instructor Name"]}
          dur={d["Course Duration"]}
          video={d["Video Link"]}
          link={d["View More"]}
        />
      ))}

      {nav.startsWith("/course/enroll/") && (
        <div className="relative w-full h-full rounded-[10px] bg-purple-500 max-md:h-4/5">
          <Form/>
        </div>
      )}
    </div>
  );
}
