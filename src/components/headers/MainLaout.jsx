const { Children } = require("react");
const { Header } = require("./Header");
const { Footer } = require("../footer/Footer");

const MainLaout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default MainLaout;
