import Image from "next/image";
import Link from "next/link";

const Data = ({ card }) => {
  const publishedDate = new Date(card.published_at);

  [
    // {
    //   id: 1,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://img.freepik.com/free-photo/digital-art-beautiful-mountains_23-2151123686.jpg",
    // },
    // {
    //   id: 2,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    // },
    // {
    //   id: 3,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://image.cdn2.seaart.ai/2023-08-29/15718937463421957/88f59dbdc859df9c163af54045e46db58a68ad94_high.webp",
    // },
    // {
    //   id: 4,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://c4.wallpaperflare.com/wallpaper/242/929/307/stars-night-nature-river-wallpaper-preview.jpg",
    // },
    // {
    //   id: 5,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://img.freepik.com/premium-photo/dazzling-starry-sky-wallpaper-universe-starry-sky-backgroundgenerative-ai_710973-6728.jpg",
    // },
    // {
    //   id: 6,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://e0.pxfuel.com/wallpapers/844/86/desktop-wallpaper-3d-science-earth-science.jpg",
    // },
    // {
    //   id: 7,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://w0.peakpx.com/wallpaper/15/907/HD-wallpaper-world-half-burning-half-about-to-explote.jpg",
    // },
    // {
    //   id: 8,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://e0.pxfuel.com/wallpapers/545/916/desktop-wallpaper-galaxy-space-ipad-pretty-space-thumbnail.jpg",
    // },
    // {
    //   id: 9,
    //   title: "technology",
    //   description:
    //     "The Impact of Technology on the Workplace: How Technology is Changing",
    //   createdAt: "2024/2/4",
    //   url: "https://i.pinimg.com/736x/dc/5c/61/dc5c617aada7b47c8ab594cdd12a6c89.jpg",
    // },
  ];
};

export const Blogplace = () => {
  return (
    <div className="w-full     h-auto ">
      <div className="container  mt-11 justify-between  flex-wrap gap-2 flex mx-auto ">
        {Data.map((card) => (
          <div className="w-[392px] flex flex-col gap-3 border-2 p-2 border-[#E8E8EA] rounded-lg ">
            <div
              className={"w-[360px] h-[240px] rounded-lg "}
              style={{ backgroundImage: `url(${card.url})` }}
            ></div>
            <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
              {card.title}
            </p>
            <p className="text-3xl">{card.description}</p>
            <p>{card.createdAt}</p>
          </div>
        ))}
      </div>
      <div className="flex  items-center justify-center">
        <p className="w-16 p-1 rounded-lg flex h-14 border-2">
          <a
            href="blog-list
          "
          >
            load more
          </a>
        </p>
      </div>
    </div>
  );
};
