import { useEffect, useState } from "react";

import { Blogplace } from "../blogplace/Blogplace";

export const Menu = () => {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(9); // usestate bolgoj

  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}&tag=${filter}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
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
    <div className="w-full ">
      <div className="container mt-5 mx-auto">
        <button className="text-4xl">all blog post</button>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <button onClick={() => handleclick("")} className="text-orange-400">
              all
            </button>
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
            <button>view all</button>
          </div>
        </div>
      </div>
      <Blogplace
        articles={articles}
        handleMorePageClick={handleMorePageClick}
      />
    </div>
  );
};
