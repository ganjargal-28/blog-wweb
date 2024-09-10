// import { Header } from "../headers/Header";
// import { Hero } from "../hero/Hero";
// import { Menu } from "../menu/Menu";
// import { Trend } from "../trend/Trend";
// import { Footer } from "../footer/Footer";

// import { Blogplace } from "../blogplace/Blogplace";

// const Homepage = () => {
//   return (
//     <div className="md:">
//       <Header />
//       <Hero />
//       <Trend />
//       <Menu filter={setFilter} />
//       <Blogplace />
//       <Footer />
//     </div>
//   );
// };
// export default Homepage;
import { useEffect, useState } from "react";
import { Header } from "../headers/Header";
import { Hero } from "../hero/Hero";
import { Menu } from "../menu/Menu";
import { Trend } from "../trend/Trend";
import { Footer } from "../footer/Footer";
import { Blogplace } from "../blogplace/Blogplace";

const Homepage = () => {
  const [filter, setFilter] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(9); // usestate bolgoj

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`) // datagaas duudaad
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  useEffect(() => {
    setFiltered(articles);
  }, [articles]);

  return (
    <div className="md:">
      <Header />
      <Hero />
      <Trend />
      <Menu articles={articles} setFiltered={setFiltered} />
      <Blogplace articles={filtered} />
      <Footer />
    </div>
  );
};

export default Homepage;
