import { useState, useEffect } from "react";
export const Trend = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(4); // usestate bolgoj
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`) // datagaas duudaad
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  const handleMorePageClick = () => {
    setPage(page + 3); // datagaasaa 3 nemne
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="w-full">
      <div className="container flex mt-5 gap-4 mx-auto">
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
{
  /* <p>Trend</p>
        <div className="flex gap-8">
          <div className="bg-[url('/Image38.png')] flex flex-col justify-end w-[289px] h-[320px]">
            <div className="p-4">
              <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB] ">
                Technology
              </p>
              <p className="text-[#FFFFFF]">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[url('/com.png')] flex flex-col justify-end w-[289px] h-[320px]">
              <div className="p-5">
                <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB] ">
                  Technology
                </p>
                <p className="text-[#FFFFFF]">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[url('/Image2.png')] flex flex-col justify-end w-[289px] h-[320px]">
              <div className="p-5">
                <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB] ">
                  Technology
                </p>
                <p className="text-[#FFFFFF]">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[url('/Image3.png')] flex flex-col justify-end w-[289px] h-[320px]">
              <div className="p-5">
                <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB] ">
                  Technology
                </p>
                <p className="text-[#FFFFFF]">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
              </div>
            </div>
          </div>
        </div> */
}
