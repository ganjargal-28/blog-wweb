import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.production.min";
const { useRouter } = require("next/router");

const Singlepost = () => {
  const router = useRouter();

  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`) // datagaas duudaad
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(articles);
  return (
    <div>
      <h1>{articles.title}</h1>
      <h1>{articles.description}</h1>
    </div>
  );
};
