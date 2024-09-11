import Link from "next/link";

export const TrendingList = ({ articles }) => {
  // <= articles нь props байдлаар дамжина
  return (
    <div className="w-full">
      <div className="container px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mt-5">
        {articles &&
          Array.isArray(articles) &&
          articles.map((articles) => {
            // zugluulna => articles.map => ((article) ene bol return dotor baigaa zuiliig aguulna
            console.log(articles);

            return (
              <Link href={`/blogs/${articles.id}`}>
                <div className="w-[300px] flex flex-col gap-5 border-2 p-2 border-[#E8E8EA] rounded-lg ">
                  <div
                    className={
                      "w-290px] h-[240px] rounded-lg hover:scale-105  "
                    }
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
              </Link>
            );
          })}
      </div>
    </div>
  );
};
