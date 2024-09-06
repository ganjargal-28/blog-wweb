import { useEffect, useState } from "react";
import { All, Design } from "../svgss/Design";

export const Menu = ({ setFilter }) => {
  const handleclick = (filterTag) => {
    setFilter(filterTag);
  };
  return (
    <div className="w-full ">
      <div className="container mt-5 mx-auto">
        <button className="text-4xl">all blog post</button>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button onClick={() => handleclick("")} className="text-orange-400">
              all
            </button>
            <Design handleclick={handleclick} />

            <button onClick={() => handleclick("travel")}>Travel</button>
            <button onClick={() => handleclick("fashion")}>Fashion</button>
            <button onClick={() => handleclick("technology")}>
              Technology
            </button>
            <button onClick={() => handleclick("branding")}>Branding</button>
          </div>
          <div>
            <button>view all</button>
          </div>
        </div>
      </div>
    </div>
  );
};
