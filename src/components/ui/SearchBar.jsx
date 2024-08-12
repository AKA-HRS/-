import React from "react";
import search from "../../assets/search.svg";

export function SearchBar() {
  return (
    <div className="w-full border h-auto flex justify-center items-center rounded-lg bg-white">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        className="outline-none bg-transparent text-black h-10 w-4/5"
      />
      <button className="mx-2">
        <img src={search} alt="" className="w-5 h-5" />
      </button>
    </div>
  );
}
