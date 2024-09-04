const { useRouter } = require("next/router");

const Singlepost = () => {
  const router = useRouter();

  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/150589`) // datagaas duudaad
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(router.query);
};
