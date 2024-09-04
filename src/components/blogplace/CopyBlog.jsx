import { useState, useEffect } from "react";

export const Blogplace = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(12); // usestate bolgoj
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`) // datagaas duudaad
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  const handleMorePageClick = () => {
    setPage(page + 3); // datagaasaa 3 nemne
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="w-full   h-auto ">
      <div className="container  mt-11 justify-between  flex-wrap gap-2 flex mx-auto ">
        {articles.map((article) => {
          // zugluulna => articles.map => ((article) ene bol return dotor baigaa zuiliig aguulna
          return (
            <div className="w-[392px] flex flex-col gap-3 border-2 p-2 border-[#E8E8EA] rounded-lg ">
              <div
                className={"w-[360px] h-[240px] rounded-lg "}
                style={{ backgroundImage: `url(${article.cover_image})` }}
              ></div>
              <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
                {article.tag_list[0]}
              </p>
              <p className="text-3xl">{article.description}</p>
            </div>
          );
        })}
      </div>
      <div className="flex  items-center justify-center">
        <button
          onClick={handleMorePageClick} // darah uyd deerh command ajilna
          className="w-16 p-1 rounded-lg flex h-14 border-2"
        >
          load more
        </button>
      </div>
    </div>
  );
};
