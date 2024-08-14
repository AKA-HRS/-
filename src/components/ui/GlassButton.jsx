import React from "react";
import "./GlassButton.css";

export function GlassButton({ name, title, onClick }) {
  return (
    <button
      className="card-shine-effect text-white w-24 h-8"
      onClick={() => onClick(title)}
    >
      {name}
    </button>
  );
}
