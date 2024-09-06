import { useEffect, useState } from "react";
import { All, Design } from "../svgss/Design";

export const Menu = () => {
  const [filter, setFilter] = useState("");
  const [filteradd, setFilteradd] = useState(9);
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${filteradd}&tag=${filter}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [filteradd, filter]);

  const handleclick = (filterTag) => {
    setFilter("discuss");
    console.log(filterTag);
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
