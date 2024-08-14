import React from "react";
import "./GlassButton.css";
import { useNavigateTo } from "../context/NavContext";

export function GlassButton({ name, title }) {
  const { setNav } = useNavigateTo();
  return (
    <button
      className="card-shine-effect text-white w-24 h-8"
      onClick={() => setNav(`/course/enroll/${title}`)}
    >
      {name}
    </button>
  );
}
