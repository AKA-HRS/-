import React from "react";
import insta from "../../assets/insta.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { useNavigateTo } from "../context/NavContext";

const icons = [
  { icon: insta, path: "https://www.instagram.com/", title: "instagram" },
  { icon: facebook, path: "https://www.facebook.com/", title: "facebook" },
  { icon: twitter, path: "https://x.com/home?lang=en", title: "twitter" },
  { icon: whatsapp, path: "https://www.whatsapp.com/", title: "whatsapp" },
];

export function Home() {
  const { setNav } = useNavigateTo();
  return (
    <div className="w-full h-full relative flex flex-col landscape:max-lg:flex-col overflow-y-auto">
      <div className="flex-1 relative flex max-md:flex-col landscape:max-lg:flex-col">
        <div className="flex-1 flex">
          <div className="flex justify-center flex-col ml-5 md:ml-28 font-Varela">
            <h3 className="text-4xl max-sm:text-3xl md:text-7xl font-bold">
              Lets
            </h3>
            <h1 className="text-6xl max-sm:text-5xl md:text-9xl font-bold text-purple-600">
              E-learning
            </h1>
            <h2 className="text-5xl max-sm:text-4xl md:text-8xl font-bold">
              at your home
            </h2>
            <p className="w-[66%] max-md:w-full text-lg my-5 text-gray-500">
              Welcome to <strong>Class Mate</strong>, the ultimate online
              learning platform designed to empower learners from all walks of
              life. Whether you're looking to advance your career, explore new
              hobbies, or gain knowledge in a specific field,
              <strong>Class Mate </strong>
              offers a diverse range of courses tailored to your needs.
            </p>
            <div className="flex justify-start space-x-10 items-center my-5">
              <button
                onClick={() => setNav("/courses")}
                className="text-white shadow-2xl shadow-gray-500 p-2 md:px-8 px-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-bold"
              >
                Explore now
              </button>
              <button
                onClick={() => setNav("/about")}
                className="text-gray-500 border-2 p-2 md:px-8 px-3  rounded-full border-purple-700 font-bold"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex m-5 md:ml-28 space-x-4 relative justify-center md:justify-start items-center">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
            className="your-button-class"
          >
            <button className="w-7 h-7 flex justify-center items-center rounded-full border-2 border-purple-600">
              <img src={icon.icon} className="w-4 h-4" alt="" />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
