import { Header } from "../headers/Header";
import { Hero } from "../hero/Hero";
import { Menu } from "../menu/Menu";
import { Trend } from "../trend/Trend";
import { Footer } from "../footer/Footer";

import { Blogplace } from "../blogplace/Blogplace";
import { useEffect, useState } from "react";

const Homepage = () => {
  return (
    <div className="md:">
      <Header />
      <Hero />
      <Trend />
      <Menu />
      <Footer />
    </div>
  );
};
export default Homepage;
