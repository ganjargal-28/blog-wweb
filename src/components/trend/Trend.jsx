import { useState, useEffect } from "react";

import { TrendingList } from "./TrendingList";

export const Trend = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(4); // usestate bolgoj
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=${page}&top=2`
      );
      const data = response.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
    // datagaas duudaad
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
