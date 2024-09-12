import { Meta } from "../svgss/Meta";
import { Paragraph } from "./Paragraph";
import { Search } from "../svgss/Search";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HamburgerBar } from "../svgss/HamburgerBar";

export const Header = ({ changeScreen }) => {
  const [clickbutton, setClickbutton] = useState("home");
  const [isOpen, setIsopen] = useState(false);
  const [data, setData] = useState([]);
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://dev.to/api/articles`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (value) => {
    const filterArray = articles.filter((filter) =>
      filter.title.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterArray);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleclick = (tag) => {
    setClickbutton(tag);
    console.log(tag);
  };
  useEffect(() => {
    handleclick();
  }, []);

  return (
    <div className="w-full ">
      <div className="container  mx-auto mt-5 flex flex-col sm:flex-row justify-between items-center sm:items-start relative space-y-4 sm:space-y-0">
        <Meta />
        <div className=" md:flex hidden">
          <Paragraph />
        </div>

        <button className="md:hidden pr-2 flex" onClick={changeScreen}>
          <HamburgerBar />
        </button>

        <div className="  hidden md:flex items-center space-x-3 p-2 text-white rounded-lg shadow-lg transition-transform duration-300 hover:shadow-[0_0_15px_rgba(72,187,255,0.8)]">
          <input
            type="text"
            placeholder="search"
            onChange={(event) => handleSearch(event.target.value)}
            className=" border-2 text-black rounded-lg bg-[var(--secondary-100)] outline-none"
          />
          <div className="absolute top-[40px] h-[400px] overflow-scroll hover:bg-blue-100 max-w-[400px] bg-white rounded-lg  outline-none z-10">
            <div className="flex flex-col flex-wrap gap-5 text-black bg-transparent">
              {data.map((articles, index) => (
                <Link href={`blogs/${articles.id}`}>
                  <div
                    className="w-full h-auto border hover:bg-blue-300 border-[#A1A1A1] rounded-lg"
                    key={index}
                  >
                    {articles.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
              stroke="#52525B"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M10.5715 10.5716L14 14"
              stroke="#52525B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
