import Link from "next/link";
// zohiolch zurag ner
export const BlogListing = ({ articles, handleMorePageClick }) => {
  return (
    <div className="w-full   h-auto ">
      <div className="container  mt-11 justify-between  flex-wrap gap-2 flex mx-auto ">
        {articles.map((article) => {
          return (
            <Link href={`/blogs/${article.id}`}>
              <div className="w-[392px] flex flex-col gap-3 border-2 p-2 border-[#E8E8EA] rounded-lg ">
                <div
                  className={"w-[360px] h-[240px] rounded-lg hover:scale-105  "}
                  style={{ backgroundImage: `url(${article.cover_image})` }}
                ></div>
                <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
                  {article.tag_list[0]}
                </p>
                <p className="text-3xl line-clamp-3 ">{article.description}</p>
                {/* <p>{article?.user?.profile_image}</p> */}
                <p>{article?.user?.username}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex  items-center justify-center">
        <button
          onClick={handleMorePageClick}
          className="w-16 p-1 rounded-lg flex h-14 border-2"
        >
          load more
        </button>
      </div>
    </div>
  );
};
