import { useEffect, useState } from "react";
import { Meta } from "../svgss/Meta";
import { Paragraph } from "./Paragraph";
import { HamburgerBar } from "../svgss/HamburgerBar";
import Link from "next/link";

export const Header = ({ changeScreen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickbutton, setClickbutton] = useState("home");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Хайлт хийх утга

  // Fetch articles
  const fetchData = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle search
  const handleSearch = (value) => {
    setSearchTerm(value); // Тохиромжтой хайлт үүсгэнэ
  };

  const filteredData = data.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto mt-5 flex flex-col sm:flex-row justify-between items-center sm:items-start relative space-y-4 sm:space-y-0">
        {/* Left section with Meta and Paragraph */}
        <div className="flex items-center justify-between gap-4 w-full sm:w-auto">
          <Meta />
          <div className="md:flex hidden">
            <Paragraph />
          </div>

          {/* Hamburger button */}
          <button
            className={`md:hidden pr-2 flex transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            onClick={toggleMenu}
          >
            <HamburgerBar />
          </button>
        </div>

        {/* Search Bar (Desktop view) */}
        <div className="relative hidden md:flex items-center space-x-3 p-2 text-black rounded-lg shadow-lg transition-transform duration-300 hover:shadow-[0_0_15px_rgba(72,187,255,0.8)]">
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(event) => handleSearch(event.target.value)}
            className="border-2 text-black rounded-lg bg-[var(--secondary-100)] outline-none"
          />
          {/* Show search results only if searchTerm has a value */}
          {searchTerm && (
            <div className="absolute top-[40px] h-[400px] overflow-scroll hover:bg-blue-100 max-w-[400px] bg-white rounded-lg outline-none z-10">
              <div className="flex flex-col gap-5 text-black bg-transparent">
                {filteredData.length > 0 ? (
                  filteredData.map((article, index) => (
                    <Link href={`blogs/${article.id}`} key={index}>
                      <div className="w-full h-auto border hover:bg-blue-300 border-[#A1A1A1] rounded-lg p-2">
                        {article.title}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center text-gray-500">
                    No results found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Dropdown Menu (for Hamburger button) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 right-0 bg-white p-5 space-y-3 md:hidden transition-transform duration-300 ease-in-out`}
        >
          {/* Navigation Links for Mobile */}
          <div className="space-y-3">
            <Paragraph />
            {/* Search bar in mobile dropdown */}
            <div className="md:flex items-center space-x-3 p-2 text-black rounded-lg shadow-lg transition-transform duration-300 hover:shadow-[0_0_15px_rgba(72,187,255,0.8)]">
              <input
                type="text"
                placeholder="search"
                value={searchTerm}
                onChange={(event) => handleSearch(event.target.value)}
                className="border-2 text-black rounded-lg bg-[var(--secondary-100)] outline-none"
              />
              {searchTerm && (
                <div className="absolute top-[40px] h-[400px] overflow-scroll hover:bg-blue-100 max-w-[00px] bg-white rounded-lg outline-none z-10">
                  <div className="flex flex-col gap-5 text-black bg-transparent">
                    {filteredData.length > 0 ? (
                      filteredData.map((article, index) => (
                        <Link href={`blogs/${article.id}`} key={index}>
                          <div className="w-full h-auto border hover:bg-blue-300 border-[#A1A1A1] rounded-lg p-2">
                            {article.title}
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="text-center text-gray-500">
                        No results found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
