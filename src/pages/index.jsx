import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trend } from "@/components/Trend";
import { Menu } from "@/components/Menu";
import { Blogplace } from "@/components/Blogplace";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Trend />
      <Menu />
      <Blogplace />
    </div>
  );
}
