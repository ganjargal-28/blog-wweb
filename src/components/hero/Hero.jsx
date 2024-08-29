export const Hero = () => {
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div>
          <div className="bg-[url('/Image.png')] rounded-lg bg-cover w-[1260px] h-[600px]">
            <div className="flex flex-col w-full p-4 h-full justify-end">
              <div className="w-[598px] h-[200px]  border-2  bg-white rounded-xl ">
                <div className="gap-8  flex flex-col">
                  <p className="w-32 h-6 flex justify-center text-[#FFFFFF]  rounded-lg bg-[#4B6BFB]">
                    Technology
                  </p>
                  <p className="text-3xl">
                    Grid system for better Design User Interface
                  </p>
                  <p>August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end p-2 ">
            <div className=" border-2 w-7 h-7 flex items-center justify-center rounded-lg">
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon"
                  d="M8.5 16L1 8.5L8.5 1"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="border-2 w-7 h-7 flex items-center rounded-lg justify-center">
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon"
                  d="M1 1L8.5 8.5L1 16"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
