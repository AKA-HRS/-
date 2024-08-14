import React, { useState } from "react";
import "./Form.css";
import cross from "../../assets/cross.svg";
import { useNavigateTo } from "../context/NavContext";
import data from '../../assets/data.json'

export function Form() {
  const { setNav } = useNavigateTo();
  //use context to have access of formData
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
  });

  return (
    <div className="form flex justify-center items-center">
      <button
        onClick={() => setNav("/courses")}
        className="absolute w-10 h-10 top-2 rounded-full right-2"
      >
        <img src={cross} alt="close" />
      </button>

      <form
        action=""
        method="post"
        className="h-4/5 w-full md:w-1/3 border p-2 rounded-xl relative flex-col flex items-center"
      >
        <h2 className="mb-5 text-center text-2xl font-bold text-white drop-shadow-2xl">
          Enroll Now
        </h2>
        <div className="flex justify-center items-center w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full p-2 rounded-lg border-2 outline-none border-gray-300"
          />
        </div>

        <div className="flex justify-center items-center w-full mt-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg border-2 outline-none border-gray-300"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-3">
          <input
            type="tel"
            name="contact"
            id="contact"
            placeholder="Contact no"
            className="w-full p-2 rounded-lg border-2 outline-none border-gray-300"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-3">
          <select name="course" id="course" className="w-full p-2 rounded-lg border-2 outline-none border-gray-300">
            <option value="">Select Course</option>
            {data.map((d,i)=>(
              <option key={i} value={d["Course Title"]}>{d["Course Title"]}</option>
            ))}
          </select>
        </div>

        <div className="hover:shadow-xl hover:shadow-black font-bold text-white w-24 h-10 flex bg-black bottom-5 absolute justify-center items-center rounded-2xl">
          <button type="submit" className="w-full h-full bg-transparent">Register</button>
        </div>
      </form>
    </div>
  );
}
