import { useState, useEffect } from "react";
import Link from "next/link";
export const Copy = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(9); // usestate bolgoj
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
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase()
  );

  return (
    //   <div className="container mt-auto justify-between flex-wrap gap-2 flex mt-14">
    //  <input type="text" placeholder="search" className="mb-4 p-2 border border-gray-300 rounded
    //  " onChange={e => setSearchTerm(e.target.value)} />
    //  {filteredArticles.map(article =>(

    //  ))}
    //   </div>;
    <div className="w-full   h-auto ">
      <div className="container  mt-11 justify-between  flex-wrap gap-2 flex mx-auto ">
        {articles.map((articles) => {
          // zugluulna => articles.map => ((article) ene bol return dotor baigaa zuiliig aguulna
          return (
            <Link href={`/blog-list/${articles.id}`}>
              <div className="w-[392px] flex flex-col gap-3 border-2 p-2 border-[#E8E8EA] rounded-lg ">
                <div
                  className={"w-[360px] h-[240px] rounded-lg hover:scale-105  "}
                  style={{ backgroundImage: `url(${articles.cover_image})` }}
                ></div>
                <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
                  {articles.tag_list[0]}
                </p>
                <p className="text-3xl line-clamp-3 ">{articles.description}</p>
              </div>
            </Link>
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
