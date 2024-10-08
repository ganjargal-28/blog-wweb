import { useEffect, useState } from "react";

import { All, Design } from "../svgss/Design";

import { Blogplace } from "../blogplace/Blogplace";

export const Menu = () => {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(9); // usestate bolgoj
  const [blogplaceArticles, setblogplaceArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=${page}&tag=${filter}`
      );
      const data = await response.json();
      setblogplaceArticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [filter, page]);

  const handleMorePageClick = () => {
    setPage(page + 3); // datagaasaa 3 nemne
  };
  const handleclick = (filterTag) => {
    setFilter(filterTag);
    console.log("filterTag filterTag filterTag", filterTag);
  };

  return (
    <div className="w-full">
      <div className="container mt-5 mx-auto">
        <button className="text-4xl">all blog post</button>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button onClick={() => handleclick("")} className="text-orange-400">
              all
            </button>

            <Design handleclick={handleclick} />

            <button onClick={() => handleclick("")}>Fashion</button>
            {/* <Design handleclick={handleclick} /> */}

            <button onClick={() => handleclick("javascript")}>
              javascript
            </button>
            <button onClick={() => handleclick("fashion")}>Fashion</button>
            <button onClick={() => handleclick("technology")}>
              Technology
            </button>
            <button onClick={() => handleclick("branding")}>Branding</button>
          </div>
          <div>
            <button onClick={() => setFilter(filter + 5)}>view all</button>
          </div>
        </div>
      </div>
      <Blogplace
        blogplaceArticles={blogplaceArticles}
        handleMorePageClick={handleMorePageClick}
      />
    </div>
  );
};
