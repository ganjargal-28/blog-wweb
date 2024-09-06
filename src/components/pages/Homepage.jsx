import { Blogplace } from "./Blogplace";
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
import { useState, useEffect } from "react";

const Homepage = () => {
  // setFilter =

  return (
    <div className="md:">
      <Header />
      <Hero />
      <Trend />
      <Menu />
      <Blogplace />
      <Footer />
    </div>
  );
};
export default Homepage;
