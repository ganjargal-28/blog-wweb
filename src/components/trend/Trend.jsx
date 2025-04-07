import { useState, useEffect } from "react";

import { TrendingList } from "./TrendingList";

export const Trend = () => {
  const [trendingListArticles, setTrendingListArticles] = useState([]);
  const [page, setPage] = useState(4); // usestate bolgoj
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=${page}&top=2`
      );
      const data = await response.json();
      setTrendingListArticles(data);
    } catch (error) {
      console.log(error);
    }
    // datagaas duudaad
  };
  useEffect(() => {
    setTrendingListArticles(trendingListArticles);
  }, []);
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div>
      <TrendingList trendingListArticles={trendingListArticles} />
    </div>
  );
};
