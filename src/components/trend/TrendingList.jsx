import Link from "next/link";

export const TrendingList = ({ trendingListArticles }) => {
  return (
    <div className="w-full">
      <div className="container px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mt-5">
        {trendingListArticles &&
          Array.isArray(trendingListArticles) &&
          trendingListArticles.map((article) => {
            const defaultTag = "Tech";
            const tag = article.tag_list?.length
              ? article.tag_list[0]
              : defaultTag;
            const imageAltText = article.title || "Trending article image";

            return (
              <Link href={`/blogs/${trendingListArticles.id}`}>
                <div className="w-[300px] flex flex-col gap-5 border-2 p-2 border-[#E8E8EA] rounded-lg ">
                  <div
                    className="w-full h-[240px] rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${article.cover_image})`,
                    }}
                  >
                    <img
                      src={article.cover_image}
                      alt={imageAltText}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="w-32 h-6 flex justify-center text-white rounded-lg bg-[#4B6BFB]">
                    {tag}
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold line-clamp-2">
                    {article.title}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
