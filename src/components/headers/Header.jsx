// import { Meta } from "./headers/Meta";
// import { Paragraph } from "./headers/Paragraph";
// import { Search } from "./headers/Search";

import { Meta } from "./Meta";
import { Paragraph } from "./Paragraph";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto  flex justify-between">
        <Meta />
        <Paragraph />
        <Search />
      </div>
    </div>
  );
};
