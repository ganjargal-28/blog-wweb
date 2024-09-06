// import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Singlepost() {
  const router = useRouter();

  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(articles);
  return (
    <main>
      <Ingo />
    </main>
  );
}
