import { useState, useEffect } from "react";

import { TrendingList } from "./TrendingList";

export const Trend = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(4); // usestate bolgoj
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}&top=2`) // datagaas duudaad
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div>
      <TrendingList articles={articles} />
    </div>
  );
};
