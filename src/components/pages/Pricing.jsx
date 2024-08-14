import React from "react";
import { useParams } from "react-router-dom";

export function Pricing() {
  const { title } = useParams();
  return (
    <div>
      <div>sdfsadfsaf {title}</div>
    </div>
  );
}
