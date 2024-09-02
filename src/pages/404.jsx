import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/headers/Header";
import { Error } from "@/components/pages/Error";

export default function name(params) {
  return (
    <div className="flex flex-col gap-4 ">
      <Header />
      <Error />
      <Footer />
    </div>
  );
}
