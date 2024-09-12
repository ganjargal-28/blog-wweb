import Link from "next/link";

export const Blogplace = ({ blogplaceArticles, handleMorePageClick }) => {
  return (
    <div className="w-full   h-auto ">
      <div className="container  mt-11 justify-between md:  flex-wrap gap-2 flex mx-auto ">
        {blogplaceArticles.map((blogplaceArticles) => {
          return (
            <Link href={`/blogs/${blogplaceArticles?.id}`}>
              <div className="w-[392px] flex flex-col gap-3 border-2 p-2 border-[#E8E8EA] rounded-lg ">
                <div
                  className={"w-[360px] h-[240px] rounded-lg hover:scale-105  "}
                  style={{
                    backgroundImage: `url(${blogplaceArticles?.cover_image})`,
                  }}
                ></div>
                <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
                  {blogplaceArticles?.tag_list[0]}
                </p>
                <p className="text-3xl line-clamp-3 ">
                  {blogplaceArticles?.description}
                </p>
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
