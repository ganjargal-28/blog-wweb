import { BlogListing } from "@/components/blogplace/BlogListing";
import { Blogplace } from "@/components/blogplace/Blogplace";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/headers/Header";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [page, setPage] = useState(12);

  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const handleMorePageClick = () => {
    setPage(page + 3); // datagaasaa 3 nemne
  };

  return (
    <div>
      <BlogListing
        articles={articles}
        handleMorePageClick={handleMorePageClick}
      />
    </div>
  );
};
export default Blogs;
