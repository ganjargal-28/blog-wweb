import { useEffect, useState } from "react";
import { Header } from "../headers/Header";
import { Hero } from "../carsuel/Hero";
import { Menu } from "../menu/Menu";
import { Trend } from "../trend/Trend";
import { Footer } from "../footer/Footer";

import { Blogplace } from "../blogplace/Blogplace";
import { TrendingList } from "../trend/TrendingList";

const Homepage = () => {
  const [blogplaceArticles, setBlogplaceArticles] = useState([]);
  const [page, setPage] = useState(4); // usestate bolgoj
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
    setTrendingListArticles(trendingListArticles);
  }, [trendingListArticles]);
  useEffect(() => {
    setHeroArticles(heroArticles);
  }, [heroArticles]);
  return (
    <div className="md:">
      <Header />
      <Hero heroArticles={heroArticles} />
      <TrendingList trendingListArticles={trendingListArticles} />
      <Menu blogplaceArticles={blogplaceArticles} setFilter={setFilter} />
      <Blogplace blogplaceArticles={blogplaceArticles} />

      <Footer />
    </div>
  );
};

export default Homepage;
