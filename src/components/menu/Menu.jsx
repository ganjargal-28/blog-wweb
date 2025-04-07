import { useEffect, useState } from "react";
import { All, Design } from "../svgss/Design";
import { Blogplace } from "../blogplace/Blogplace";

export const Menu = () => {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(9); // Initial number of articles
  const [blogplaceArticles, setBlogplaceArticles] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error on new fetch attempt
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=${page}&tag=${filter}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      setBlogplaceArticles(data);
    } catch (error) {
      setError(error.message); // Set error message if fetch fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter, page]);

  const handleMorePageClick = () => {
    setPage((prevPage) => prevPage + 3); // Add 3 to the page number for pagination
  };

  const handleClick = (filterTag) => {
    setFilter(filterTag);
    setPage(9); // Reset page when a new filter is selected
  };

  return (
    <div className="w-full">
      <div className="container mt-5 mx-auto">
        <button className="text-4xl">All Blog Posts</button>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => handleClick("")}
              className={`${
                filter === "" ? "text-blue-500" : "text-orange-400"
              }`}
            >
              All
            </button>
            <Design handleclick={handleClick} />
            <button
              onClick={() => handleClick("fashion")}
              className={`${filter === "fashion" ? "text-blue-500" : ""}`}
            >
              Fashion
            </button>
            <button
              onClick={() => handleClick("javascript")}
              className={`${filter === "javascript" ? "text-blue-500" : ""}`}
            >
              JavaScript
            </button>
            <button
              onClick={() => handleClick("technology")}
              className={`${filter === "technology" ? "text-blue-500" : ""}`}
            >
              Technology
            </button>
            <button
              onClick={() => handleClick("branding")}
              className={`${filter === "branding" ? "text-blue-500" : ""}`}
            >
              Branding
            </button>
          </div>
          <div>
            <button onClick={handleMorePageClick}>View More</button>
          </div>
        </div>
      </div>

      {/* Show loading message if data is being fetched */}
      {loading && <div className="text-center mt-4">Loading...</div>}

      {/* Show error message if fetch fails */}
      {error && <div className="text-center mt-4 text-red-500">{error}</div>}

      <Blogplace
        blogplaceArticles={blogplaceArticles}
        handleMorePageClick={handleMorePageClick}
      />
    </div>
  );
};
