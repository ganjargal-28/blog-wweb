export const TrendingList = (articles) => {
  // <= map bairshuulna
  return (
    <div className="w-full">
      <div className="container  px-5 flex mt-5 gap-3 mx-auto">
        {articles.map((articles) => {
          // zugluulna => articles.map => ((article) ene bol return dotor baigaa zuiliig aguulna
          return (
            <div className="w-[300px] flex flex-col gap-5 border-2 p-2 border-[#E8E8EA] rounded-lg ">
              <div
                className={"w-290px] h-[240px] rounded-lg hover:scale-105  "}
                style={{ backgroundImage: `url(${articles.cover_image})` }}
              ></div>
              <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
                technology
              </p>
              <p className="text-3xl line-clamp-3 ">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
