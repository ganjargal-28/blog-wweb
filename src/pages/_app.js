import MainLaout from "@/components/headers/MainLaout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLaout>
      <Component {...pageProps} />;
    </MainLaout>
  );
}
