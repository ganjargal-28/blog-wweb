// import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";
// import { Trend } from "@/components/Trend";
// import { Menu } from "@/components/Menu";
// import { Blogplace } from "@/components/Blogplace";

// import { Blogplace } from "../blogplace/Blogplace";
import { Blogplace } from "../blogplace/Blogplace";
import { Header } from "../headers/Header";
import { Hero } from "../hero/Hero";
import { Menu } from "../menu/Menu";
import { Trend } from "../trend/Trend";
import { Footer } from "../footer/Footer";
import { Footer2 } from "../footer/Footer2";
import { Footerz } from "../footer/Footerz";
import { Allblogplace } from "../blogplace/Allblogplace";
import { Info } from "../blogplace/Info";
import { Sign } from "../footer/Sign";
import { Error } from "./Error";
export default function Homepage() {
  const [card, setCard] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  return (
    <div className="md:">
      <Header />
      <Hero />
      <Trend />
      <Menu />
      <Blogplace />
      <Footer />
      <Footerz />
      <Footer2 />
      {/* <Allblogplace /> */}
      {/* <Info /> */}
      {/* <Sign /> */}
      {/* <Error /> */}
    </div>
  );
}
