import Image from "next/image";
import Link from "next/link";

const Data = [
  {
    id: 1,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 2,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 3,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 4,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 5,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 6,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 7,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 8,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
  {
    id: 9,
    title: "technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    createdAt: "2024/2/4",
  },
];
export const Blogplace = () => {
  return (
    <div className="w-full     h-auto ">
      <div className="container justify-between flex-wrap gap-3 flex mx-auto ">
        {Data.map((card) => (
          <div className="w-[392px] flex flex-col gap-3 border-2 p-2 border-[#E8E8EA] rounded-lg ">
            <img src="beach.png" alt="" />
            <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
              {card.title}
            </p>
            <p className="text-3xl">{card.description}</p>
            <p>{card.createdAt}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <p>load more</p>
      </div>
    </div>
  );
};
