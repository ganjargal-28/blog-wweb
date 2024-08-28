import { Meta } from "./Headers/Meta";
import { Paragraph } from "./Headers/Paragraph";
import { Search } from "./Headers/Search";

export const Header = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto border-2 border-blue-500  flex justify-between">
        <Meta />
        <Paragraph />
        <Search />
      </div>
    </div>
  );
};
