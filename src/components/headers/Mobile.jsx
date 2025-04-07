import Link from "next/link";

export const Mobile = ({ changeScreen }) => {
  return (
    <div className="max-w-[375px] w-full h-[667px] border-2 border-blue-400 dark:bg-black absolute ease-linear duration-50 delay-500 transition-all top-0 right-0 bg-white">
      <div className="max-w-[320px] container h-[667px] flex flex-col  h-[667px bg-slate-500] ">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-xl   ">Tom</h1>
          <button onClick={changeScreen}>
            <img src="x.png" alt="" />
          </button>
        </div>
        <div className="flex   gap-3 flex-col">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
        </div>

        <div className="w-full flex     items-center gap-[16px] p-[16px]">
          <div className="flex justify-between items-center    ">
            <h1>Switch Theme</h1>
          </div>
        </div>
        <Link href={"Light.pdf"} target="blank">
          <button className="max-w-[300px] max-h-8 rounded-lg text-white flex justify bg-slate-900">
            Download CV
          </button>
        </Link>
      </div>
    </div>
  );
};
