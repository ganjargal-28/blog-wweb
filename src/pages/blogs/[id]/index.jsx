// import { useRouter } from "next/router";
import { SinglePost } from "@/components/blogplace/SinglePost";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/headers/Header";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const SinglepostDetail = () => {
  const router = useRouter();

  const [article, setArticle] = useState([]);
  console.log("router.query.id", router.query.id);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dev.to/api/articles/${router.query.id}`
      );
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
    // datagaas duudaad
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("articlesss", article);
  return (
    <div className="w-full ">
      <Header />
      <SinglePost article={article} />
      {/* {article?.title} */}

      <Footer />
    </div>
  );
};
export default SinglepostDetail;
{
  /* <div className="container mx-auto ">
<div>
  <div>
    <p className=" max-w-[804px] text-3xl">
      The Impact of Technology on the Workplace: How Technology is
      Changing
    </p>
    <div className="flex  items-center gap-3">
      <img src="profile.png" alt="" />
      <p>Tracey Wilson</p>
      <p>August 20, 2022</p>
    </div>
    <div
      className={"w-[804px] h-[400px] rounded-lg "}
      style={{ backgroundImage: `url(${articles.cover_image})` }}
    ></div>
    <h1>{articles?.tag_list}</h1>
    <p>{articles?.description}</p>

    <div className="max-w-[804px] ">
      <div className="gap-2 flex flex-col">
        <p>
          Traveling is an enriching experience that opens up new
          horizons, exposes us to different cultures, and creates
          memories that last a lifetime. However, traveling can also be
          stressful and overwhelming, especially if you don't plan and
          prepare adequately. In this blog article, we'll explore tips
          and tricks for a memorable journey and how to make the most of
          your travels. One of the most rewarding aspects of traveling
          is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases
          in the local language can also go a long way in making
          connections and showing respect.
        </p>
        <p className="text-6xs flex">Research Your Destination</p>
        <p>
          Before embarking on your journey, take the time to research
          your destination. This includes understanding the local
          culture, customs, and laws, as well as identifying top
          attractions, restaurants, and accommodations. Doing so will
          help you navigate your destination with confidence and avoid
          any cultural faux pas. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec
          ullamcorper sit amet. Aenean euismod elementum nisi quis
          eleifend quam adipiscing vitae. Viverra adipiscing at in
          tellus.
        </p>
        <h1>Plan Your Itinerary</h1>
        <p>
          While it's essential to leave room for spontaneity and
          unexpected adventures, having a rough itinerary can help you
          make the most of your time and budget. Identify the must-see
          sights and experiences and prioritize them according to your
          interests and preferences. This will help you avoid
          overscheduling and ensure that you have time to relax and
          enjoy your journey. Vitae sapien pellentesque habitant morbi
          tristique. Luctus venenatis lectus magna fringilla. Nec
          ullamcorper sit amet risus nullam eget felis. Tincidunt arcu
          non sodales neque sodales ut etiam sit amet.
        </p>
      </div>
    </div>
  </div>
</div>
</div> */
}
