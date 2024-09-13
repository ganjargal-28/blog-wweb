import { useEffect, useState } from "react";

import { Hero } from "../carsuel/Hero";
import { Menu } from "../menu/Menu";
import { Trend } from "../trend/Trend";

import { Blogplace } from "../blogplace/Blogplace";

const Homepage = () => {
  const [blogplaceArticles, setBlogplaceArticles] = useState([]);
  const [page, setPage] = useState(); // usestate bolgoj
  const [filter, setFilter] = useState([]);
  const [trendingListArticles, setTrendingListArticles] = useState([]);
  const [heroArticles, setHeroArticles] = useState([]);
  const fetchData = async () => {
    // async daraalal shaardahgui ajildag
    try {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=${page}`
        // datag ilui bolowsorogui argaar dudna
      );
      const data = await response.json();
      setBlogplaceArticles(data);
    } catch (error) {
      // catch ni aldaag haruuldag
      console.log("gggg", error);
    }
    // datagaas duudaad
  };
  useEffect(() => {
    // useEffect ni duudsan data hook awchirj baigaa
    fetchData();
  }, [page]);

  useEffect(() => {
    setBlogplaceArticles(blogplaceArticles);
  }, [blogplaceArticles]);

  useEffect(() => {
    setHeroArticles(heroArticles);
  }, [heroArticles]);
  return (
    <div className="md:">
      <Hero heroArticles={heroArticles} />
      <Trend />
      <Menu blogplaceArticles={blogplaceArticles} setFilter={setFilter} />
      <Blogplace blogplaceArticles={blogplaceArticles} />
    </div>
  );
};

export default Homepage;
