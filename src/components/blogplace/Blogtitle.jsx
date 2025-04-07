import { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=10&page=${page}`
      );
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMorePageClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col items-center">
      {articles.map((article) => {
        return <div>{article.title}</div>;
      })}
      <button
        className="border border-red-400"
        onClick={handleMorePageClick}
      ></button>
    </div>
  );
};

export default UseEffectPage;
