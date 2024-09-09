import { useState, useEffect, useRef } from "react";

export const Hero = () => {
  const [articles, setArticles] = useState([]);
  const containerRef = useRef(null);

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dev.to/api/articles?per_page=6&top=10"
      ); // Fetch articles from dev.to
      const result = await response.json();
      setArticles(result); // Set articles state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Scroll function
  const handleScroll = (direction) => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.scrollBy({ left: -1260, behavior: "smooth" });
      } else {
        containerRef.current.scrollBy({ left: 1260, behavior: "smooth" });
      }
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="container mt-5 mx-auto">
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="overflow-x-scroll scroll-smooth flex gap-4"
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="w-100% h-[600px] bg-cover rounded-lg"
              style={{ backgroundImage: `url(${article.cover_image})` }}
            >
              <div className="flex flex-col w-[1200px] p-4 h-full justify-end mx-6">
                <div className="w-[598px] h-[200px] bg-white rounded-xl">
                  <div className="gap-7 p-3 flex flex-col">
                    <p className="w-32 h-6 flex justify-center text-white rounded-lg bg-blue-500">
                      {article.tag_list.length ? article.tag_list[0] : "Tech"}
                    </p>
                    <p className="text-3xl max-w-[300px]">{article.title}</p>
                    <p>{new Date(article.published_at).toDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <div className="flex gap-4 justify-end p-2">
          <div
            className="border-2 w-7 h-7 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => handleScroll("left")}
          >
            <svg
              width="9"
              height="17"
              viewBox="0 0 9 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Icon"
                d="M8.5 16L1 8.5L8.5 1"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="border-2 w-7 h-7 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => handleScroll("right")}
          >
            <svg
              width="9"
              height="17"
              viewBox="0 0 9 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Icon"
                d="M1 1L8.5 8.5L1 16"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
